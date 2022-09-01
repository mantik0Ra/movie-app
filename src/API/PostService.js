import axios from "axios";
import getRandomInt from "../Utils/randomInt";

export default class PostService {
    static async getUpcoming() {
        let page = getRandomInt();
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=" + page);
        return response
    }

   
    static async getNowPlaying() {
        let page = getRandomInt();
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=" + page);
        return response
    }

    static async getDetailsByID(movie_id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=132a5d971081c7edc27050e667052636&language=en-US`);
        return response
    }

    static async getFullCastByID(movie_id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=132a5d971081c7edc27050e667052636&language=en-US`);
        return response
    }

    static async getSimilarMovies(movie_id) {
        let page = getRandomInt();
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=` + page);
        return response
    }

}