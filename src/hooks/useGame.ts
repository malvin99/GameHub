import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClient from "../services/api-client"
import { Game } from "./useGames"
import { CanceledError } from "axios"


function useGame () {

    const [gameDetails, setGameDetails] = useState<Game>()
    const [error, setError] = useState()

    const {id} = useParams()

    useEffect(() => {

        const controller = new AbortController();
    

        apiClient.get<Game>(`/games/${id}`, {signal: controller.signal})
                .then(response => {
                    setGameDetails(response.data);
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                        {setError(err.message);
                        }
                })
        
        return () => controller.abort()
    }, [id])

    return {error, gameDetails}
}

export default useGame