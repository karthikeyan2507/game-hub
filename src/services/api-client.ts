import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api",
    params: {
        key : "9b68a86596fb4704baacbae50f81e0da",
    }
});