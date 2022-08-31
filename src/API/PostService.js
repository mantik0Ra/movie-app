import axios from "axios";

export default class PostService {
    static async getUpcoming() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
        return response
    }

    static async getTvShow() {
        const response = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
        return response
    }

    static async getNewReleases() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
        return response
    }
}