import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { Game } from "./useGames";


export interface Genres {
    id: number;
    name: string;
    image_background: string;
    games: Game[];
}

export interface FetchGenres {
    count: number;
    results: Genres[];
}



const useGenres = () => {
    
    const [genres, setGenres] = useState<Genres[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<FetchGenres>("/genres", {signal:controller.signal})
                .then(res => {
                    setGenres(res.data.results);
                    setLoading(false)
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                        {setError(err.message);
                            setLoading(false);
                        }
                })
        
        return () => controller.abort()
    }, [])

    return {genres, error, isLoading}

}

export default useGenres