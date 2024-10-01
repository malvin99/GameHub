import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface ScreenShots {

    id: number;
    image: string;
    width: number;
    height: number;
}

function useScreenShots () {

    const [screenShots, setScreenShots] = useState<ScreenShots | undefined>()
    const [error, setError] = useState()

    const {id} = useParams()

    useEffect(() => {

        const controller = new AbortController();
    

        apiClient.get<ScreenShots | undefined>(`/games/${id}/screenshots`, {signal: controller.signal})
                .then(response => {
                    setScreenShots(response.data);
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                        {setError(err.message);
                        }
                })
        
        return () => controller.abort()
    }, [id])

    return {error, screenShots}
}

export default useScreenShots