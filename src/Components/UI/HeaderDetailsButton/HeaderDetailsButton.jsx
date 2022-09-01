import React from 'react'
import cl from "./HeaderDetailsButton.module.css"

export default function HeaderDetailsButton({text}) {
  return (
    <button className={cl.btn}>{text}</button>
  )
}
