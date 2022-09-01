import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
import "../Styles/normalize.css";


function Main() {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  
  async function getNowPlaying() {
    const resp = await PostService.getNowPlaying();
    setNowPlaying(resp.data.results);
  }

  useEffect(() => {
    getNowPlaying();
  }, []);

  async function getUpcoming() {
    const resp = await PostService.getUpcoming();
    setUpcoming(resp.data.results);
  }

  useEffect(() => {
    getUpcoming();
  }, []);

  
  return (
    <div className="App">
      <Header resp={nowPlaying}/>
      <MovieList title={"Now Playing"} resp={nowPlaying}/>
      <MovieList title={"Top Rated"} resp={upcoming}/>
      <Footer/>
    </div>
  );
}

export default Main;