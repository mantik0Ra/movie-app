import React from 'react'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import PostService from '../../API/PostService'
import ActorsList from '../ActorsList/ActorsList'
import cl from "./AdInfo.module.css"

export default function AdInfo({ props }) {

    const btnOverview = useRef(null)
    const btnActors = useRef(null)
    const [state, setState] = useState(1);
    const [actors, setActors] = useState(1);

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

    async function getActors() {
        const resp = await PostService.getFullCastByID(props.detailsResult.id);
        setActors(resp.data.cast)
    }

    useEffect(() => {
        getActors();
    }, [])

    

    return (
        <section className={cl.sectionOverview}>
            <div className={cl.containerOverview}>
                <button onClick={selectSection} ref={btnOverview} className={`${cl.btn} ${cl.anim}`}>Overview</button>
                <button onClick={selectSection} ref={btnActors} className={`${cl.btn} ${cl.actors}`}>Actors</button>
            </div>
            {btnOverview.current ?
                (btnOverview.current.classList.contains(cl.anim) ? <p className={cl.overview}>{props.detailsResult.overview}</p>
                    :
                    <ActorsList actors={actors}/>)
                : <p className={cl.overview}>{props.detailsResult.overview}</p>}
        </section>
    )
}
