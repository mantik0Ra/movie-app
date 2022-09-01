import HeaderDetailsButton from '../UI/HeaderDetailsButton/HeaderDetailsButton';
import cl from "./Header.module.css"

export default function Header({resp}) {

  console.log(resp)
  

  return (
    <header className={cl.header} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${resp[3] ? resp[3].backdrop_path : ""})` }} >
        <div className={cl.container}>
            <h1 className={cl.title}>{resp[3] ? resp[3].title : ""}</h1>
            <span className={cl.rating}>Rating: {resp[3] ? resp[3].vote_average : ""}</span>
            <p className={cl.description}>{resp[3] ? resp[3].overview : ""}</p>
            <HeaderDetailsButton text={"Open Preview"}></HeaderDetailsButton>
        </div>
    </header>
  )
}
