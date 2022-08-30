import React from 'react'
import cl from "./MovieContainer.module.css"

export default function Releases({ props }) {

  console.log(props)

  return (

    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${props[0]})` }} className={cl.movieContainer}>
      <span className={cl.date}>{props[1]}</span>
      <span className={cl.rating}>Rating: {props[2]}</span>
      <h4 className={cl.title}>{props[3]}</h4>
    </div>

  )
}
