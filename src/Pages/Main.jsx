import { useEffect, useState } from "react";
import PostService from "../API/PostService";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
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

 
  return (
    <div className="App">
      <Header/>
      <MovieList title={"New Releases"} resp={newReleases}/>
      <MovieList title={"Top Rated"} resp={upcoming}/>
      <Footer/>
    </div>
  );
}

export default Main;