import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = function () {

const [platform, setPlatform] = useState<Platform[]>()
const [error, setError] = useState("")


useEffect ( () => {

    apiClient.get('/platforms/lists/parents')
            .then((response) => setPlatform(response.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                    {setError(err.message);}
})

            
}, [])

return {platform, error}
}

export default usePlatforms