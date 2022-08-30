import React from 'react'
import Releases from '../MovieContainer/MovieContainer'
import cl from "./MovieList.module.css"

export default function MovieList({resp, title}) {

    return (
        <div className={cl.container}>
            <section className={cl.releases}>
                <article className={cl.article}>{title} {'>'}</article>
                <div className={cl.movieContainers}>
                    {resp.map(release => 
                        <Releases key={release.id} props={[release.backdrop_path, (release.release_date ? release.release_date : release.first_air_date), release.vote_average, (release.title ? release.title : release.name)]}/>)}
                </div>
            </section>
        </div>
    )
}
