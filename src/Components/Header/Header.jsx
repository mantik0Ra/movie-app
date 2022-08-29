import React from 'react'
import cl from "./Header.module.css"

export default function Header() {
  return (
    <header className={cl.header}>
        <div className={cl.container}>
            <span className={cl.genre}>Fantasy</span>
            <span className={cl.rating}>8.0</span>
            <h1 className={cl.title}>Inception</h1>
            <p className={cl.description}>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.</p>
            <button className={cl.btnPreview}>Open preview</button>
        </div>
    </header>
  )
}
