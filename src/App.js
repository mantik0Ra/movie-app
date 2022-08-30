import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import ReleasesList from "./Components/ReleasesList/ReleasesList";
import "./normalize.css";

function App() {

  const [newReleases, setNewReleases] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  async function getNewReleases() {
    const resp = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
    setNewReleases(resp.data.results);
  }

  useEffect(() => {
    getNewReleases();
    console.log(newReleases)
  }, []);

  async function getUpcoming() {
    const resp = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=132a5d971081c7edc27050e667052636&language=en-US&page=1");
    setUpcoming(resp.data.results);
  }

  useEffect(() => {
    getUpcoming();
  }, []);


  
  

  return (
    <div className="App">
      <Header/>
      <ReleasesList title={"New Releases"} resp={newReleases}/>
    </div>
  );
}

export default App;
