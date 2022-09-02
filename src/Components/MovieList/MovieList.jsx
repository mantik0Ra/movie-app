import React from 'react';
import { Link } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import cl from "./MovieList.module.css";

export default function MovieList({resp, title, url}) {

    return (
        <div className={cl.container}>
            <section className={cl.movieList}>
                <Link to={url}><article className={cl.article}>{title} {'>'}</article></Link>
                <div className={cl.movieContainers}>
                    {resp.map(item => 
                        <MovieContainer key={item.id} props={[item.poster_path, (item.release_date ? item.release_date : item.first_air_date), item.vote_average, (item.title ? item.title : item.name), item.id]}/>)}
                </div>
            </section>
        </div>
    )
}
