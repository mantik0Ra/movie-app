import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
import Loader from "../Components/UI/Loader/Loader";
import { getNowPlaying, getTopRated } from "../redux/slices/mainSlice";

import "../Styles/normalize.css";


function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const resultNowPlaying = useSelector((state) => state.main.nowPlayingResult);
  const resultTopRated = useSelector((state) => state.main.topRatedResult)

  useEffect(() => {
    if(resultNowPlaying.length >= 1) {
      return 
    }
    setIsLoading(true)
    getInfo();
    if(getNowPlaying.fulfilled) {
      setIsLoading(false)
    }
  }, []);

  
  async function getInfo() {
    dispatch(getNowPlaying())
    dispatch(getTopRated());
  }

  return (
    <div className="App">
      {isLoading ? <Loader/> : <><Header resp={resultNowPlaying} /><MovieList url={"/all"} title={"Now Playing"} resp={resultNowPlaying} /><MovieList url={"/all"} title={"Top Rated"} resp={resultTopRated} /><Footer /></>}
    </div>
  );
}

export default Main;