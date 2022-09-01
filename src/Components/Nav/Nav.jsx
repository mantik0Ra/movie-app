import React from 'react'
import cl from "./Nav.module.css"
import MyButton from "../UI/NavButton"
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <nav>
        <div className={cl.container}>
            <Link to="/main"><MyButton props={<i className="fa-solid fa-house"></i>}></MyButton></Link>
            <MyButton props={<i className="fa-solid fa-bookmark"></i>}></MyButton>
            <MyButton props={<i className="fa-solid fa-border-all"></i>}></MyButton>
        </div>
    </nav>
  )
}
