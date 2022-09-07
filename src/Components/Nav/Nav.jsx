import React from 'react'
import cl from "./Nav.module.css"
import NavButton from "../UI/NavButton/NavButton"
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <nav>
        <div className={cl.container}>
            <Link title='main' to="/main"><NavButton props={<i className="fa-solid fa-house"></i>}></NavButton></Link>
            <Link title='watchlist' to="/watchlist"><NavButton props={<i className="fa-solid fa-bookmark"></i>}></NavButton></Link>
            <Link title='all films' to="/all"><NavButton props={<i className="fa-solid fa-border-all"></i>}></NavButton></Link>
            <Link title='search' to="/search"><NavButton props={<i className="fa-solid fa-magnifying-glass"></i>}></NavButton></Link>
        </div>
    </nav>
  )
}
