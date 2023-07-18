import { useState } from "react";
import api from "../../utils/ThirdPartyApi";
import "./SearchForm.css";
import { set } from "react-hook-form";
function SearchForm({ setCards, setBusquedaEstado, setPagina, busqueda }) {
  //
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.busqueda.value);
    setBusquedaEstado(e.target.busqueda.value);
    setPagina(1);
    console.log(busqueda);
    if (busqueda) {
      api.getCards(busqueda).then((res) => {
        console.log(res);
        setCards(res.articles);
      });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__input"
        placeholder="Naturaleza"
        name="busqueda"
      />
      <button className="form__button">
        <p className="form__button-text">Buscar</p>
      </button>
    </form>
  );
}

export default SearchForm;
