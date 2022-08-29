import React from 'react'
import cl from "./Releases.module.css"

export default function Releases() {
  return (
    <div className={cl.container}>
        <section className={cl.releases}>
            <article className={cl.article}>New releases {'>'}</article>
            <div className={cl.movieContainers}>
                <div className={cl.movieContainer}>
                    <span className={cl.genre}>Fantasy</span>
                    <span className={cl.rating}>8.0</span>
                    <h4 className={cl.title}>Inception</h4>
                </div>
            </div>
        </section>
    </div>
  )
}
