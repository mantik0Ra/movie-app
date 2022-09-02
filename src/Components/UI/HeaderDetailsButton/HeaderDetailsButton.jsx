import React from 'react'
import cl from "./HeaderDetailsButton.module.css"

export default function HeaderDetailsButton({text, increment}) {
  return (
    <button onClick={increment} className={cl.btn}>{text}</button>
  )
}
