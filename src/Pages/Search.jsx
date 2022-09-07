import React, { useMemo, useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import PostService from '../API/PostService'
import AllMovieContainer from '../Components/AllMovieContainer/AllMovieContainer'
import Footer from '../Components/Footer/Footer'
import LookingForm from '../Components/UI/LookingForm/LookingForm'
import cl from "../Styles/Search.module.css"

export default function Search() {

    const [inputValue, setInputValue] = useState("");
    const [searchMovie, setSearchMovie] = useState([])
    const [error, setError] = useState("");
    
    async function getSearch(value) {
        try {
            const response = await PostService.getSearch(value);
            setSearchMovie(response.data.results)
            setError("")
            console.log("nen")
            
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }



  return (
    <main className={cl.main}>
        <LookingForm search={getSearch.bind(null, inputValue)}  value={inputValue} change={(e) => setInputValue(e.target.value)}/>
        {searchMovie.length > 1 ? <AllMovieContainer allTopRated={searchMovie}/> : <div className={cl.alt}>Ничего не найдено</div>}
        <Footer/>
    </main>
  )
}
