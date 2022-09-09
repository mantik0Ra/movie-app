import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
import Loader from "../Components/UI/Loader/Loader";
import { getNowPlaying, getTopRated } from "../redux/slices/mainSlice";

import "../Styles/normalize.css";


function Main() {

  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const resultNowPlaying = useSelector((state) => state.main.nowPlayingResult);
  const resultTopRated = useSelector((state) => state.main.topRatedResult)
  
  async function getNow() {
    dispatch(getNowPlaying())

  }

  useEffect(() => {
    if(resultNowPlaying.length >= 1) {
      return 
    }
    setIsLoading(true)
    setTimeout(() => {
      getNow();
      getTop();
      setIsLoading(false);
    }, 500)
  }, []);

  useMemo(() => {
    setNowPlaying(resultNowPlaying);
    setTopRated(resultTopRated);
  }, [resultNowPlaying, resultTopRated])


  async function getTop() {
    dispatch(getTopRated());
  }

  return (
    <div className="App">
      {isLoading ? <Loader/> : <><Header resp={nowPlaying} /><MovieList url={"/all"} title={"Now Playing"} resp={nowPlaying} /><MovieList url={"/all"} title={"Top Rated"} resp={topRated} /><Footer /></>}
    </div>
  );
}

export default Main;