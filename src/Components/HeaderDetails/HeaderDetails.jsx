import React from 'react'
import HeaderDetailsButton from '../UI/HeaderDetailsButton/HeaderDetailsButton'
import cl from "./HeaderDetails.module.css"

export default function HeaderDetails({props}) {

    console.log(props.fullCast.crew)
    
    return (
        <header className={cl.header} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.details.backdrop_path})` }}>
            <div className={cl.main}>
                <h1 className={cl.title}>{props.details.title}</h1>
                <span className={cl.genre}>Genre: {props.details.genres ? props.details.genres[0].name : ""}</span>
                <span className={cl.players}>Director: {props.fullCast.crew ? (props.fullCast.crew.find(director => director.known_for_department === "Directing") ? props.fullCast.crew.find(director => director.known_for_department === "Directing").name : "Unknown") : "Unknown"}</span>
                <span className={cl.players}>Actors: {props.fullCast.cast ? props.fullCast.cast[0].name : ""}{props.fullCast.cast ? `, ${props.fullCast.cast[1].name}` : ""}{props.fullCast.cast ? `, ${props.fullCast.cast[2].name}` : ""}</span>
                <HeaderDetailsButton text={"Add to Favorite"}/>
            </div>
        </header>
    )
}
