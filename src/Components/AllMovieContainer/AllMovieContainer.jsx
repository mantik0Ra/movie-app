import React from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import cl from "./AllMovieContainer.module.css"

export default function AllMovieContainer({ allTopRated }) {

    console.log(allTopRated)

    return (
        <div className={cl.main}>
            
            <div className={cl.container}>{allTopRated.map(item =>
                <MovieContainer key={item.index} props={[item.poster_path, (item.release_date ? item.release_date : item.first_air_date), item.vote_average, (item.title ? item.title : item.name), item.id]} />)}

            </div>
        </div>
    )
}
