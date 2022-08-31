import cl from "./NavButton.module.css";

import React from 'react'

export default function MyButton({props}) {
  return (
    <button className={cl.btn}>{props}</button>
  )
}
