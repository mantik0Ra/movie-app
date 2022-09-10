import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import HeaderDetails from '../Components/HeaderDetails/HeaderDetails';
import MovieList from '../Components/MovieList/MovieList';
import Loader from '../Components/UI/Loader/Loader';
import cl from "../Styles/Details.module.css"
import AdInfo from '../Components/AdInfo/AdInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails, getMovieFullCast, getSimilarMovies } from '../redux/slices/detailsSlice';

export default function Details() {
    const params = useParams();
    const container = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const similarResult = useSelector((state) => state.details.similarMovieResult);
    const detailsResult = useSelector((state) => state.details.detailsResult);
    const fullCastResult = useSelector((state) => state.details.fullCastResult);

    async function getDetailInfo(id) {
        dispatch(getMovieFullCast(id))
        dispatch(getSimilarMovies(id))
        dispatch(getMovieDetails(id))
    }

    useEffect(() => {
        setIsLoading(true)
        container.current.scrollIntoView();
        getDetailInfo(params.id);
        setTimeout(() => {
            if(getMovieDetails.fulfilled) {
                setIsLoading(false)
            }
        }, 1500)
        
    }, [params.id])

    return (
        <div className={cl.container} ref={container}>
            {isLoading ? 
            <Loader/>
             : 
             <><HeaderDetails props={{ detailsResult, fullCastResult }} /><AdInfo props={{ detailsResult }} /><MovieList url={"/all"} title={"Similar Movies"} resp={similarResult} /><Footer /></>}
        </div>

    )
}
