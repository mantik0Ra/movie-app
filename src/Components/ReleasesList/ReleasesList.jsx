import React from 'react'
import Releases from '../Releases/Releases'
import cl from "./ReleasesList.module.css"

export default function ReleasesList({resp, title}) {

    console.log(resp)
    return (
        <div className={cl.container}>
            <section className={cl.releases}>
                <article className={cl.article}>{title} {'>'}</article>
                <div className={cl.movieContainers}>
                    {resp.map(release => 
                        <Releases key={release.id} resp={release}/>)}
                </div>
            </section>
        </div>
    )
}
