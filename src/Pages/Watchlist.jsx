import React, { useEffect, useState, useMemo } from 'react'
import MovieContainer from '../Components/MovieContainer/MovieContainer'
import HeaderDetailsButton from '../Components/UI/HeaderDetailsButton/HeaderDetailsButton'
import cl from "../Styles/Watchlist.module.css"

export default function Watchlist() {

    const [key, setKey] = useState([])
    const [item, setItem] = useState([])

    useEffect(() => {
        setKey(Object.keys(localStorage))
    }, [])



    function clearAll() {
        localStorage.clear();
        setKey([])
    }



    return (
        <div className={cl.container}>
            <div className={cl.btnContainer}>
                <HeaderDetailsButton text={"Clear All"} call={clearAll} />
            </div>
            <div className={cl.main}>
                {key[0] ? key.map(id =>
                    <MovieContainer key={id} props={[JSON.parse(localStorage.getItem(id)).poster_path, JSON.parse(localStorage.getItem(id)).date, JSON.parse(localStorage.getItem(id)).vote_average, (JSON.parse(localStorage.getItem(id)).title), id]} />
                ) : <div className={cl.empty}>Watchlist is empty</div>}
            </div>
        </div>

    )
}
