import React from 'react'
import cl from "./HeaderDetailsButton.module.css"

export default function HeaderDetailsButton({text, call}) {
  return (
    <button onClick={call} className={cl.btn}>{text}</button>
  )
}
