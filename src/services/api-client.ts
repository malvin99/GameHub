import axios from "axios"

export default axios.create( {
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "42fa6a7339524a88ab0840f3f098bc25",
    }
}
)
