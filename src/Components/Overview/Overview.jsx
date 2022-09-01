import React from 'react'
import cl from "./Overview.module.css"

export default function Overview({props}) {
    return (
        <section className={cl.sectionOverview}>
            <div className={cl.containerOverview}>
                <button className={cl.btnOverview}>Overview</button>
            </div>
            <p className={cl.overview}>{props.details.overview}</p>
        </section>
    )
}
