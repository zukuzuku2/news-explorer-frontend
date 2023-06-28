import React from "react";
import "./SavedNews.css";
import { Link } from "react-router-dom";


export default function SavedNews() {
  return (
    <>
      <div className="saved-news__header-container">

        <p className="saved-news__title-header">NewsExplorer</p> 
        <Link to="/" className="saved-news-header_link">
            Artículos guardados
        </Link>
        <button className="saved-news-header__button">Iniciar sesión</button>

      </div>
      <p className="saved-news__description">Artículos guardados</p>
      <h1 className="saved-news__title">Elise, tienes 5 artículos guardados</h1>
      <h2 className="saved-news__subtitle">
        Por palabras clave: Naturaleza, Yellowstone, y 2 más
      </h2>
      {/* Aqui Renderizamos en componente card con las cards guardadas */}
    </>
  );
}
