import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
import Nav from "../Components/Nav/Nav";
import "../Styles/normalize.css";

function Main() {

  const [newReleases, setNewReleases] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShow, setTvShow] = useState([]);

  async function getNewReleases() {
    const resp = await PostService.getNewReleases();
    setNewReleases(resp.data.results);
  }

  useEffect(() => {
    getNewReleases();
  }, []);

  async function getUpcoming() {
    const resp = await PostService.getUpcoming();
    setUpcoming(resp.data.results);
  }

  useEffect(() => {
    getUpcoming();
  }, []);

  async function getTvShow() {
    const resp = await PostService.getTvShow();
    setTvShow(resp.data.results);
  }

  useEffect(() => {
    getTvShow();
  }, []);


  
  

  return (
    <div className="App">
      <Header/>
      <MovieList title={"New Releases"} resp={newReleases}/>
      <MovieList title={"Top Rated"} resp={upcoming}/>
      <MovieList title={"TV Shows"} resp={tvShow}/>
    </div>
  );
}

export default Main;