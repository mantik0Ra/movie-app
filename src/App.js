import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Nav from "./Components/Nav/Nav";
import "./Styles/normalize.css";


function App() {

  return (
    
      <BrowserRouter>
        <Nav />
        <AppRouter />
      </BrowserRouter>


  );
}

export default App;
