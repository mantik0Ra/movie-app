import React, { useEffect, useState } from 'react'
import HeaderDetailsButton from '../UI/HeaderDetailsButton/HeaderDetailsButton'
import cl from "./HeaderDetails.module.css"

export default function HeaderDetails({props}) {

    const [text, setText] = useState("Add to Favorite");


    function addToFavorite() {
        localStorage.setItem(props.details.id, JSON.stringify({poster_path: props.details.poster_path, title: props.details.title, vote_average: props.details.vote_average, date: props.details.release_date}))
        setText("In watchlist")
    }

    console.log((props.fullCast.cast))

    return (
        <header className={cl.header} style={{ backgroundImage: props.details.backdrop_path ? `url(https://image.tmdb.org/t/p/original/${props.details.backdrop_path}` : "" }}>
            <div className={cl.main}>
                <h1 className={cl.title}>{props.details.title}</h1>
                <span className={cl.genre}>Genre: {props.details.genres ? props.details.genres[0].name : ""}</span>
                <span className={cl.players}>Director: {props.fullCast.crew ? (props.fullCast.crew.find(director => director.known_for_department === "Directing") ? props.fullCast.crew.find(director => director.known_for_department === "Directing").name : "Unknown") : "Unknown"}</span>
                <span className={cl.players}>Actors: {props.fullCast.cast ? props.fullCast.cast[0].name : ""}{props.fullCast.cast ? `, ${props.fullCast.cast[1].name}` : ""}{props.fullCast.cast ? `, ${props.fullCast.cast[2].name}` : ""}</span>
                <HeaderDetailsButton call={addToFavorite} text={text}/>
            </div>
        </header>
    )
}
