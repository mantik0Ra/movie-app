import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import Nav from "./Components/Nav/Nav";
import "./normalize.css";

function App() {

  const [newReleases, setNewReleases] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShow, setTvShow] = useState([]);

  async function getNewReleases() {
    const resp = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
    setNewReleases(resp.data.results);
  }

  useEffect(() => {
    getNewReleases();
  }, []);

  async function getUpcoming() {
    const resp = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
    setUpcoming(resp.data.results);
  }

  useEffect(() => {
    getUpcoming();
  }, []);

  async function getTvShow() {
    const resp = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
    setTvShow(resp.data.results);
  }

  useEffect(() => {
    getTvShow();
  }, []);


  
  

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <MovieList title={"New Releases"} resp={newReleases}/>
      <MovieList title={"Top Rated"} resp={upcoming}/>
      <MovieList title={"TV Shows"} resp={tvShow}/>
    </div>
  );
}

export default App;
