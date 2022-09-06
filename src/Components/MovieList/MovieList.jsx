import React, { cloneElement } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import cl from "./MovieList.module.css";

export default function MovieList({resp, title, url}) {

    const container = useRef(null)

    function moveList(e) {
        if(e.target.classList.contains("fa-arrow-right") || e.target.classList.contains("MovieList_btnRigth__g6dNN")) {
            return container.current.scrollBy(600, 0);
        }
        container.current.scrollBy(-600, 0);
            
        
        
    }

    return (
        <div className={cl.container}>
            <section className={cl.movieList}>
                <Link to={url}><article className={cl.article}>{title} {'>'}</article></Link>
                <div ref={container} className={cl.movieContainers}>
                    {resp.map(item => 
                        <MovieContainer key={item.id} props={[item.poster_path, (item.release_date ? item.release_date : item.first_air_date), item.vote_average, (item.title ? item.title : item.name), item.id]}/>)}
                        <button onClick={moveList} className={`${cl.btnRigth} ${cl.btn}`}><i className='fa-solid fa-arrow-right'></i></button>
                        <button onClick={moveList} className={`${cl.btnLeft} ${cl.btn}`}><i className='fa-solid fa-arrow-left'></i></button>

                </div>
            </section>
        </div>
    )
}
