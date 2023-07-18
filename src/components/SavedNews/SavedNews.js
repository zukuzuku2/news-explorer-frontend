import React from "react";
import "./SavedNews.css";
import { Link } from "react-router-dom";

export default function SavedNews() {
  return (
    <>
      <div className="saved-news__container">
        <p className="saved-news__description">Artículos guardados</p>
        <h1 className="saved-news__title">
          Elise, tienes 5 artículos guardados
        </h1>
        <h2 className="saved-news__subtitle">
          Por palabras clave: Naturaleza, Yellowstone, y 2 más
        </h2>
      </div>
      {/* Aqui Renderizamos en componente card con las cards guardadas */}
    </>
  );
}
