import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import cl from "./LookingForm.module.css"

export default function LookingForm({value, change, search}) {

    const form = useRef()

    useEffect(() => {
        form.current.addEventListener("submit", (e) => {
            e.preventDefault();
            search()
            
        })
    }, [value])
    

    return (
        <form ref={form} className={cl.form}>
            <input value={value} onChange={change} className={cl.input} placeholder={"Search movie"} />
        </form>
    )
}
