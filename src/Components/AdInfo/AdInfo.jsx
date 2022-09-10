import React from 'react'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import ActorsList from '../ActorsList/ActorsList'
import cl from "./AdInfo.module.css"

export default function AdInfo({ props }) {

    const btnOverview = useRef(null)
    const btnActors = useRef(null)
    const [state, setState] = useState(1);
    const actors = useSelector((state) => state.details.fullCastResult.cast)
    const detailsResult = useSelector((state) => state.details.detailsResult)
    

    function selectSection(e) {
        setState(state => state + 1)
        if (e.target === btnOverview.current) {
            if (btnOverview.current.classList.contains(cl.anim)) {
                return
            }
            btnOverview.current.classList.add(cl.anim)
            btnActors.current.classList.remove(cl.anim)
        }
        if (e.target.classList.contains(cl.anim)) {
            return
        }
        btnActors.current.classList.add(cl.anim)
        btnOverview.current.classList.remove(cl.anim)

    }



    return (
        <section className={cl.sectionOverview}>
            <div className={cl.containerOverview}>
                <button onClick={selectSection} ref={btnOverview} className={`${cl.btn} ${cl.anim}`}>Overview</button>
                <button onClick={selectSection} ref={btnActors} className={`${cl.btn} ${cl.actors}`}>Actors</button>
            </div>
            {btnOverview.current ?
                (btnOverview.current.classList.contains(cl.anim) ? <p className={cl.overview}>{detailsResult.overview ? detailsResult.overview : "Review not available at the moment"}</p>
                    :
                    <ActorsList actors={actors}/>)
                : <p className={cl.overview}>{detailsResult.overview}</p>}
        </section>
    )
}
