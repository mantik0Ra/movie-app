import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
import Loader from "../Components/UI/Loader/Loader";
import "../Styles/normalize.css";


function Main() {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function getNowPlaying() {
    const resp = await PostService.getNowPlaying();
    setNowPlaying(resp.data.results);
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      getNowPlaying();
      setIsLoading(false);
    }, 500)
  }, []);

  async function getTopRated() {
    const resp = await PostService.getTopRated();
    setTopRated(resp.data.results);
  }

  useEffect(() => {
    getTopRated();
  }, []);

  
  return (
    <div className="App">
      {isLoading ? <Loader/> : <><Header resp={nowPlaying} /><MovieList url={"/all"} title={"Now Playing"} resp={nowPlaying} /><MovieList url={"/all"} title={"Top Rated"} resp={topRated} /><Footer /></>}
    </div>
  );
}

export default Main;