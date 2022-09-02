import React from 'react'
import cl from "./Loader.module.css"

export default function Loader() {
  return (
    <div className={cl.loader}><span className={cl.span}>Loading...</span></div>
  )
}
