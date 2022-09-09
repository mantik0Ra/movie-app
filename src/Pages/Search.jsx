import React, { useMemo, useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import PostService from '../API/PostService'
import AllMovieContainer from '../Components/AllMovieContainer/AllMovieContainer'
import Footer from '../Components/Footer/Footer'
import LookingForm from '../Components/UI/LookingForm/LookingForm'
import cl from "../Styles/Search.module.css"
import { useSelector } from 'react-redux'

export default function Search() {

    const [inputValue, setInputValue] = useState("");
    const search = useSelector((state) => state.search.searchQuery);
    const searchResult = useSelector((state) => state.search.searchResult);

    
    
  return (
    <main className={cl.main}>
        <LookingForm value={search}/>
        {searchResult.length >= 1 ? <AllMovieContainer allTopRated={searchResult}/> : <div className={cl.alt}>Ничего не найдено</div>}
        <Footer/>
    </main>
  )
}
