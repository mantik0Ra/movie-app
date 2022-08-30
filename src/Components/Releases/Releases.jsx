import React from 'react'
import cl from "./Releases.module.css"

export default function Releases({ resp }) {

 
  return (

    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${resp.backdrop_path})` }} className={cl.movieContainer}>
      <span className={cl.genre}>{resp.release_date}</span>
      <span className={cl.rating}>Rating: {resp.vote_average}</span>
      <h4 className={cl.title}>{resp.title}</h4>
    </div>

  )
}
