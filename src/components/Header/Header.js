import "./Header.css";
import backgroundImage from "../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.png";
import headerIcon from "../../images/menu.png";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";

function Header({ handleNavigation }) {
  return (
    <header className="header">
      <img
        className="header__image"
        alt="Imagen de fondo"
        src={backgroundImage}
      />

      <div className="header__text-container">
        <h1 className="header__news">¿Qué está pasando en el mundo?</h1>
        <h2 className="header__find">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </h2>
      </div>
      <SearchForm />
    </header>
  );
}
export default Header;
