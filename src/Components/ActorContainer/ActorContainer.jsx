import React from 'react'
import cl from "./ActorContainer.module.css"

export default function ActorContainer({props}) {
    return (
        <div className={cl.containerActor}>
            <img className={cl.imgActor} src={props.profile_path ? `https://image.tmdb.org/t/p/w200/${props.profile_path}` : ""} alt="None" />
            <p className={cl.nameActor}>{props.name}</p>
        </div>
    )
}
