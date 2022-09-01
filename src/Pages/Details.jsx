import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PostService from '../API/PostService';
import Footer from '../Components/Footer/Footer';
import HeaderDetails from '../Components/HeaderDetails/HeaderDetails';
import MovieList from '../Components/MovieList/MovieList';
import Overview from '../Components/Overview/Overview';
import cl from "../Styles/Details.module.css"

export default function Details() {

    const params = useParams();

    const [details, setDetails] = useState([]);
    const [fullCast, setFullCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    async function getDetails(id) {
        const response = await PostService.getDetailsByID(id);
        setDetails(response.data);
    }

    useEffect(() => {
        getDetails(params.id)
    }, [params.id]);

    async function getFullCast(id) {
        const response = await PostService.getFullCastByID(id);
        setFullCast(response.data);
    }

    useEffect(() => {
        getFullCast(params.id);

    }, [params.id]);

    async function getSimilarMovies(id) {
        const response = await PostService.getSimilarMovies(id);
        setSimilarMovies(response.data.results);

    }

    useEffect(() => {
        getSimilarMovies(params.id);
    }, [params.id])

    
    return (
        <div className={cl.container}>
            <HeaderDetails props={{details, fullCast}}/>
            <Overview props={{details}}/>
            <MovieList title={"Similar Movies"} resp={similarMovies}/>
            <Footer/>

        </div>

    )
}
