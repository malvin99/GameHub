import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

function useGameTrailers () {

    const [gameTrailer, setGameTrailer] = useState()
    const [error, setError] = useState()

    const {id} = useParams()

    useEffect(() => {

        const controller = new AbortController();
    

        apiClient.get(`/games/${id}/movies`, {signal: controller.signal})
                .then(response => {
                    setGameTrailer(response.data);
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                        {setError(err.message);
                        }
                })
        
        return () => controller.abort()
    }, [id])

    return {error, gameTrailer}
}

export default useGameTrailers