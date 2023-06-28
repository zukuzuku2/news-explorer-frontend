import Card from "../Card/Card";
import "./Main.css";

function Main({ cards }) {
  return (
    <main className="content">
      <h1 className="content__title">Resultados de la búsqueda</h1>
      <div className="card-container">
        {cards.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
        {/* <Card cards={cards} /> */}
      </div>
      <button className="content__button">
        <p className="content__button-text">Ver más</p>
      </button>
    </main>
  );
}
export default Main;
