import "./Card.css";
import cardImage from "../../images/image_08.svg";
import bookMark from "../../images/bookmark.png";

function Card({ card }) {
  // console.log("imprimo la card");
  // console.dir(card);
  return (
    <>
      <article className="card">
        <img src={card.urlToImage} alt="Card image" className="card__image" />
        <button className="card__bookmark">
          <img className="card__bookmark-icon" src={bookMark} alt="bookmark" />
        </button>
        <div className="card__info-container">
          <p className="card__date">{card.publishedAt}</p>
          <p className="card__title">{card.title}</p>
          <p className="card__description">{card.description}</p>
          <p className="card__author">{card.source.name}</p>
        </div>
      </article>
      {/* <article className="card">
        <img src={cardImage} alt="Card image" className="card__image" />
        <button className="card__bookmark">
          <img className="card__bookmark-icon" src={bookMark} alt="bookmark" />
        </button>
        <div className="card__info-container">
          <p className="card__date">19 de febrero de 2019</p>
          <p className="card__title">La naturaleza te hace mejor</p>
          <p className="card__description">
            Todos sabemos lo bien que nos puede hacer sentir la naturaleza.
            Milenios atrás ya nos percatamos de ello: el sonido del océano, los
            aromas de un bosque...
          </p>
          <p className="card__author">national geographic</p>
        </div>
      </article>
      <article className="card">
        <img src={cardImage} alt="Card image" className="card__image" />
        <button className="card__bookmark">
          <img className="card__bookmark-icon" src={bookMark} alt="bookmark" />
        </button>
        <div className="card__info-container">
          <p className="card__date">4 de noviembre de 2020</p>
          <p className="card__title">
            El Grand Teton renueva el histórico Camino de la Cresta
          </p>
          <p className="card__description">
            "La unión de los senderos de la Cascada y del Cañón de la Muerte en
            sus picos tuvo lugar el 1 de octubre de 1933, y marcó el...
          </p>
          <p className="card__author">National parks Traveler</p>
        </div>
      </article> */}
    </>
  );
}

export default Card;
