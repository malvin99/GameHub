import {useState, useEffect} from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';
import { Genres } from './useGenres';

export interface Platform {
    id: number;
    name: string[] | string;
    slug?: string;
}

export interface Game{
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    description_raw: string;
    released: string;
    website: string;
    playtime: number
}

interface FetchGames {
    count: number;
    results: Game[];
}

const useGames = function ( 
    selectedGenre: Genres | null, selectedPlatform: Platform | null, selectedOrder: string | null, searchTerm: string | null // Add searchTerm as a parameter
) {

    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        const controller = new AbortController();
        const config = {
            signal: controller.signal,
            params: {
                page_size:40,
                ...(selectedGenre ? { genres: selectedGenre.id } : {}),
                ...(selectedPlatform ? { platforms: selectedPlatform.id } : {}),
                ...(selectedOrder ? { ordering: selectedOrder } : {}),
                ...(searchTerm ? { search: searchTerm } : {}) // Add search term to API params
            },
        };

        apiClient.get<FetchGames>("/games", config)
                .then(res => {
                    setGames(res.data.results);
                    setLoading(false)
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                        {setError(err.message);
                            setLoading(false);
                        }
                })
        
        return () => controller.abort()
    }, [selectedGenre, selectedPlatform, selectedOrder, searchTerm])

    return {games, error, isLoading}

}

export default useGames