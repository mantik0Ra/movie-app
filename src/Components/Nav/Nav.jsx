import React from 'react'
import cl from "./Nav.module.css"
import MyButton from "../UI/MyButton"

export default function Nav() {
  return (
    <nav>
        <div className={cl.container}>
            <MyButton props={<i className="fa-solid fa-house"></i>}></MyButton>
            <MyButton props={<i className="fa-solid fa-bookmark"></i>}></MyButton>
            <MyButton props={<i class="fa-solid fa-border-all"></i>}></MyButton>
        </div>
    </nav>
  )
}
