import "./Navigation.css";
import { Link } from "react-router-dom";
import btnClose from "../../images/close.png";
import menu from "../../images/menu.png";
import {useState} from "react";

function Navigation() {

  const [showMenu, setShowMenu] = useState(false);
  function handleNavigation(){
    setShowMenu(!showMenu);
  }
  
  return (
    <>
     <section className={showMenu ? "overlay" : "NoVisible"}>
        <div className="overlay__header">
          <h1 className="overlay__text">NewsExplorer</h1>
          <img
            className="overlay__img"
            src={btnClose}
            alt="news"
            onClick={handleNavigation}
          />
        </div>
        <Link to="/" className="overlay__link" onClick={handleNavigation}>
          <p className="overlay__link-text" >
          Inicio
          </p>
        </Link>
        <button className="overlay__button">
          <p className="overlay__button-text">Iniciar Sesión</p>
        </button>
      </section>  
 
      <section className= "navigate">

        <h1 className="navigate__title">NewsExplorer</h1>  
        <img className="navigate__menu" src={menu} alt="Icono menu hamburguesa" onClick={handleNavigation}/>        
        <div className="navigate__links_container">
        <Link to="/" className="overlay__link" >
          <p className="overlay__link-text" >
          Inicio
          </p>
        </Link>
        <button className="overlay__button">
          <p className="overlay__button-text">Iniciar Sesión</p>
        </button>
        </div>
        

      </section>

    </>
  );
}

export default Navigation;
