import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from "react-router-dom";
import PostService from '../API/PostService';
import Footer from '../Components/Footer/Footer';
import HeaderDetails from '../Components/HeaderDetails/HeaderDetails';
import MovieList from '../Components/MovieList/MovieList';
import Loader from '../Components/UI/Loader/Loader';
import cl from "../Styles/Details.module.css"
import AdInfo from '../Components/AdInfo/AdInfo';

export default function Details() {

    const params = useParams();

    const container = useRef(null);
    const [details, setDetails] = useState([]);
    const [fullCast, setFullCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getDetails(id) {
        const response = await PostService.getDetailsByID(id);
        setDetails(response.data);
    }

    useEffect(() => {
        getDetails(params.id);
        container.current.scrollIntoView();
        getFullCast(params.id);
    }, [params.id]);

    async function getFullCast(id) {
        const response = await PostService.getFullCastByID(id);
        setFullCast(response.data);
    }

    async function getSimilarMovies(id) {
        const response = await PostService.getSimilarMovies(id);
        setSimilarMovies(response.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            getSimilarMovies(params.id);
        }, 500)
    }, [params.id])

    return (
        <div className={cl.container} ref={container}>
            {isLoading ? 
            <Loader/>
             : 
             <><HeaderDetails props={{ details, fullCast }} /><AdInfo props={{ details }} /><MovieList url={"/all"} title={"Similar Movies"} resp={similarMovies} /><Footer /></>}
        </div>

    )
}
