import axios from "axios";
import Header from "./Components/Header/Header";
import Releases from "./Components/Releases/Releases";
import "./normalize.css";

function App() {

  const newReleases = [];

  async function getNewReleases() {
    const resp = await axios.get("https://imdb-api.com/en/API/InTheaters/k_ym99gz6a");
    newReleases.push(resp.data.items)
  }

  function getListOfNewReleases() {
    newReleases.map(releases => {
      
    })
  }




  return (
    <div className="App">
      <Header/>
      <Releases/>
    </div>
  );
}

export default App;
