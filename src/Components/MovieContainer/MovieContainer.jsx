import React from 'react';
import cl from "./MovieContainer.module.css";
import { useNavigate} from "react-router-dom";

export default function MovieContainer({ props }) {

  const navigate = useNavigate();
  function handleNavigate(id) {
    navigate(`/details/${id}`)
  }

  return (

    <div onClick={handleNavigate.bind(null, props[4])} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props[0]})` }} className={cl.movieContainer}>
      <div className={cl.containerSpan}>
        <span className={cl.date}>{props[1]}</span>
        <span className={cl.rating}>Rating: {props[2]}</span>
      </div>
      <h4 className={cl.title}>{props[3]}</h4>
    </div>

  )
}
