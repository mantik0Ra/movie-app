import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSearchQuery, getSearch, setSearchQuery } from '../../../redux/slices/searchSlice'
import cl from "./LookingForm.module.css"

export default function LookingForm({value}) {

    
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearch())
        dispatch(clearSearchQuery(""))
    }

    
    return (
        <form onSubmit={handleSubmit} className={cl.form}>
            <input value={value} onChange={(e) => { dispatch(setSearchQuery(e.target.value))}} className={cl.input} placeholder={"Search movie"} />
        </form>
    )
}
