import React, { useRef } from 'react'
import { useEffect } from 'react';
import ActorContainer from '../ActorContainer/ActorContainer'
import cl from "./ActorsList.module.css"

export default function ActorsList({ actors }) {

    const container = useRef(null);
    
    function moveList(e) {
        if(e.target.classList.contains("fa-arrow-right") || e.target.classList.contains("MovieList_btnRigth__g6dNN")) {
            return container.current.scrollBy(600, 0);
        }
        container.current.scrollBy(-600, 0);
    }

    useEffect(() => {
        container.current.scrollBy(-1000000, 0);
    }, [])

    return (
        <div className={cl.container}>
            <div ref={container} className={cl.actorsContainer}>
                {actors.map(item =>
                    <ActorContainer key={item.id} props={item} />)}
                <button onClick={moveList} className={`${cl.btnRigth} ${cl.btn}`}><i className='fa-solid fa-arrow-right'></i></button>
                <button onClick={moveList} className={`${cl.btnLeft} ${cl.btn}`}><i className='fa-solid fa-arrow-left'></i></button>
            </div>
        </div>
    )
}
