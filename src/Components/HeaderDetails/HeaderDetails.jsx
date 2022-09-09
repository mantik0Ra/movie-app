import React, { useEffect, useState } from 'react'
import HeaderDetailsButton from '../UI/HeaderDetailsButton/HeaderDetailsButton'
import cl from "./HeaderDetails.module.css"

export default function HeaderDetails({props}) {

    const [text, setText] = useState("Add to Favorite");


    function addToFavorite() {
        localStorage.setItem(props.detailsResult.id, JSON.stringify({poster_path: props.detailsResult.poster_path, title: props.detailsResult.title, vote_average: props.detailsResult.vote_average, date: props.detailsResult.release_date}))
        setText("In watchlist")
    }

    return (
        <header className={cl.header} style={{ backgroundImage: props.detailsResult.backdrop_path == null ? "" : `url(https://image.tmdb.org/t/p/original/${props.detailsResult.backdrop_path}` }}>
            <div className={cl.main}>
                <h1 className={cl.title}>{props.detailsResult.title}</h1>
                <span className={cl.genre}>Genre: {props.detailsResult.genres ? (props.detailsResult?.genres[0]?.name) : ""}</span>
                <span className={cl.players}>Director: {props.fullCastResult.crew ? (props.fullCastResult.crew.find(director => director.known_for_department === "Directing") ? props.fullCastResult.crew.find(director => director.known_for_department === "Directing").name : "Unknown") : "Unknown"}</span>
                <span className={cl.players}>Actors: {props.fullCastResult.cast ? (props.fullCastResult?.cast[0]?.name ? `${props.fullCastResult?.cast[0]?.name}` : "") : ""}{props.fullCastResult.cast ? (props.fullCastResult?.cast[1]?.name ? `, ${props.fullCastResult?.cast[1]?.name}` : "") : ""}{props.fullCastResult.cast ? (props.fullCastResult?.cast[2]?.name ? `, ${props.fullCastResult?.cast[2]?.name}` : "") : ""}</span>
                <HeaderDetailsButton call={addToFavorite} text={text}/>
            </div>
        </header>
    )
}
