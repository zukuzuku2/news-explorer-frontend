import Card from "../Card/Card";
import "./Main.css";
import "../Card/Card.css";
import { useState } from "react";
import api from "../../utils/ThirdPartyApi";

function Main({ cards, setPagina, pagina, busqueda, setCards }) {
  console.log(cards);
  //
  function handleSubmit(e) {
    e.preventDefault();
    setPagina(pagina + 1);
    api.getCards(busqueda, pagina).then((res) => {
      setCards([...cards, ...res.articles]);
    });
  }

  return (
    <main className={cards.length > 0 ? "content" : null}>
      {cards.length === 0 && (
        <h1 className="content__title">No hay resultados</h1>
      )}
      {cards.length > 0 && (
        <>
          <div className="card-container">
            {cards.length > 0 &&
              cards.map((card, index) => {
                return <Card key={index} card={card} />;
              })}
            {/* <Card cards={cards} /> */}
          </div>
          <button className="content__button" onClick={handleSubmit}>
            <p className="content__button-text">Ver más</p>
          </button>
        </>
      )}
    </main>
  );
}
export default Main;
