import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PostService from '../API/PostService';
import cl from "../Styles/Details.module.css"

export default function Details() {

    const params = useParams();

    const [details, setDetails] = useState([]);

    async function getDetails(id) {
        const response = await PostService.getDetailsByID(id);
        setDetails(response.data);
    }

    useEffect(() => {
        getDetails(params.id)
    }, []);

   

    return (
        <div className={cl.container}>
            <header className={cl.header}>
                <div className={cl.main}>
                    <h1 className={cl.title}>{details.title}</h1>
                    <span className={cl.genre}>Genre: {}</span>
                    <span className={cl.actors}>Actors: Leonardo Di Caprio</span>
                    <button className={cl.btn}>Добавить в избранное</button>
                </div>
                <div className={cl.imgContainer}>
                    
                </div>
            </header>
        </div>

    )
}
