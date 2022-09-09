import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch, setSearchQuery } from '../../../redux/slices/searchSlice'
import cl from "./LookingForm.module.css"

export default function LookingForm({value}) {

    
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.searchQuery);
    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearch())
    }

    
    return (
        <form onSubmit={handleSubmit} className={cl.form}>
            <input value={value} onChange={(e) => { dispatch(setSearchQuery(e.target.value))}} className={cl.input} placeholder={"Search movie"} />
        </form>
    )
}