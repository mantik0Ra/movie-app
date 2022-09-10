import React from 'react'
import AllMovieContainer from '../Components/AllMovieContainer/AllMovieContainer'
import Footer from '../Components/Footer/Footer'
import LookingForm from '../Components/UI/LookingForm/LookingForm'
import cl from "../Styles/Search.module.css"
import { useSelector } from 'react-redux'

export default function Search() {

    const search = useSelector((state) => state.search.searchQuery);
    const searchResult = useSelector((state) => state.search.searchResult);

  return (
    <main className={cl.main}>
        <LookingForm value={search}/>
        {searchResult.length >= 1 ? <AllMovieContainer allTopRated={searchResult}/> : <div className={cl.alt}>No results</div>}
        <Footer/>
    </main>
  )
}
