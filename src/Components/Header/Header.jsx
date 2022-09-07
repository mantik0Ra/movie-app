import { useNavigate } from 'react-router-dom';
import cl from "./Header.module.css"

export default function Header({resp}) {

  const navigate = useNavigate();
  function handleNavigate(id) {
    navigate(`/details/${id}`)
  }

  return (
    <header className={cl.header} style={{ backgroundImage: resp[1] ? `url(https://image.tmdb.org/t/p/original/${resp[1].backdrop_path}` : "" }} >
        <div className={cl.container}>
            <h1 className={cl.title}>{resp[1] ? resp[1].title : ""}</h1>
            <span className={cl.rating}>Rating: {resp[1] ? resp[1].vote_average : ""}</span>
            <p className={cl.description}>{resp[1] ? resp[1].overview : ""}</p>
            <button className={cl.button} onClick={handleNavigate.bind(null, (resp[1] ? resp[1].id : 285))}>Open Preview</button>
        </div>
    </header>
  )
}
