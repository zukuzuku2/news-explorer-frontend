import "./Navigation.css";
import { Link } from "react-router-dom";
import btnClose from "../../images/close.png";
import menu from "../../images/menu.png";
import logout from "../../images/logout.png";
import { useState } from "react";

function Navigation({ isLoggedIn, isOpen }) {
  const [showMenu, setShowMenu] = useState(false);
  function handleNavigation() {
    setShowMenu(!showMenu);
  }

  function handleForm() {
    handleNavigation();
    isOpen();
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
          <p className="overlay__link-text">Inicio</p>
        </Link>
        <Link to="/" className="overlay__link">
          {isLoggedIn ? (
            <p className="overlay__link-text">Articulos Guardados</p>
          ) : null}
        </Link>
        <button
          className="overlay__button"
          onClick={isLoggedIn ? "CerrarSesion" : handleForm}
        >
          <p className="overlay__button-text">
            {!isLoggedIn ? "Iniciar Sesión" : "Nombre"}
          </p>
          {isLoggedIn ? (
            <img
              className="overlay__button-img"
              src={logout}
              alt="Boton de cerrar sesión"
            />
          ) : null}
        </button>
      </section>

      <section className="navigate">
        <h1 className="navigate__title">NewsExplorer</h1>
        <img
          className="navigate__menu"
          src={menu}
          alt="Icono menu hamburguesa"
          onClick={handleNavigation}
        />
        <div className="navigate__links_container">
          <Link to="/" className="overlay__link">
            <p className="overlay__link-text">Inicio</p>
          </Link>
          {isLoggedIn ? (
            <Link to="/" className="overlay__link">
              <p className="overlay__link-text">Articulos Guardados</p>
            </Link>
          ) : null}
          <button
            className="overlay__button"
            onClick={isLoggedIn ? "CerrarSesion" : handleForm}
          >
            <p className="overlay__button-text">
              {!isLoggedIn ? "Iniciar Sesión" : "Nombre"}
            </p>
            {isLoggedIn ? (
              <img
                className="overlay__button-img"
                src={logout}
                alt="Boton de cerrar sesión"
              />
            ) : null}
          </button>
        </div>
      </section>
    </>
  );
}

export default Navigation;
