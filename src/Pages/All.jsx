import React, { useEffect, useRef, useState } from 'react'
import cl from "../Styles/All.module.css"
import PostService from '../API/PostService';
import Footer from "../Components/Footer/Footer"
import AllMovieContainer from '../Components/AllMovieContainer/AllMovieContainer';
import useObserver from '../Hooks/useObserver';

export default function All() {

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [allTopRated, setAllTopRated] = useState([]);
    const lastElement = useRef()

    async function getAllTopRated() {
        const resp = await PostService.getAllTopRated(page);
        setAllTopRated([...allTopRated, ...resp.data.results]);
        setTotalPage(resp.data.total_pages);

    }

    useEffect(() => {
        getAllTopRated();
    }, [page])

    useObserver(lastElement, page < totalPage, () => {
        setPage(page => page + 1)
    })

    return (
        <main className={cl.main}>
            <div>
                <AllMovieContainer allTopRated={allTopRated} />
            </div>
                <div ref={lastElement}></div>
            <Footer />

        </main>
    )
}
