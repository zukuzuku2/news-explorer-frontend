import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import api from "../../utils/ThirdPartyApi";
import SavedNews from "../SavedNews/SavedNews";

const cards = [
  {
    source: {
      id: null,
      name: "Hipertextual",
    },
    author: "Rubén Chicharro",
    title:
      "Ofertón de Carrefour: regala una TV de 55 pulgadas al comprar cualquiera de estos móviles",
    description:
      "Muchos fabricantes suelen ofrecer descuentos o dispositivos de regalo (como auriculares u otros accesorios) por la compra de sus productos, pero la última oferta de Carrefour va un paso más allá. La cadena de supermercados está regalando un televisor Samsung …",
    url: "http://hipertextual.com/2023/06/carrefour-regala-una-tv-samsung-por-la-compra-de-un-movil",
    urlToImage:
      "https://imgs.hipertextual.com/wp-content/uploads/2023/06/tv-samsung-55-pulgadas.jpg",
    publishedAt: "2023-06-21T09:56:01Z",
    content:
      "Muchos fabricantes suelen ofrecer descuentos o dispositivos de regalo (como auriculares u otros accesorios) por la compra de sus productos, pero la última oferta de Carrefour va un paso más allá. La … [+2939 chars]",
  },
  {
    source: {
      id: null,
      name: "Hipertextual",
    },
    author: "Rubén Chicharro",
    title: "Filtrado el diseño del primer plegable de OnePlus",
    description:
      "El diseño del OnePlus V Fold, el que será el primer smartphone plegable de la compañía, se ha dejado ver en imágenes gracias al filtrador Onleaks, quien junto al portal Smartprix han creado renders basándose en datos técnicos del diseño de este modelo. Según …",
    url: "http://hipertextual.com/2023/06/filtrado-el-diseno-del-primer-plegable-de-oneplus",
    urlToImage:
      "https://imgs.hipertextual.com/wp-content/uploads/2023/06/oneplus-v-fold-004.jpg",
    publishedAt: "2023-06-20T13:01:18Z",
    content:
      "El diseño del OnePlus V Fold, el que será el primer smartphone plegable de la compañía, se ha dejado ver en imágenes gracias al filtrador Onleaks, quien junto al portal Smartprix han creado renders b… [+2585 chars]",
  },
  {
    source: {
      id: null,
      name: "Xataka.com",
    },
    author: "Roberto Méndez",
    title:
      "Comienza el verano con refrescantes ofertas en smart TVs, teléfonos, videoconsolas y más: Cazando Gangas",
    description:
      "Con la llegada del primer viernes del verano, es el momento perfecto para desvelar las ofertas más cautivadoras de la semana, aquellas que despiertan una chispa de emoción en nuestros bolsillos. Si estás buscando en televisión para tu hogar o segunda residenc…",
    url: "https://www.xataka.com/seleccion/comienza-verano-refrescantes-ofertas-smart-tvs-telefonos-videoconsolas-cazando-gangas",
    urlToImage: "https://i.blogs.es/2db170/cazando-gangas-verano/840_560.jpeg",
    publishedAt: "2023-06-23T09:41:40Z",
    content:
      "Con la llegada del primer viernes del verano, es el momento perfecto para desvelar las ofertas más cautivadoras de la semana, aquellas que despiertan una chispa de emoción en nuestros bolsillos. Si e… [+8073 chars]",
  },
  {
    source: {
      id: null,
      name: "Xataka.com",
    },
    author: "Enrique Pérez",
    title:
      "El Amazon Prime Day 2023 es oficial: ya sabemos cuándo serán los dos grandes días de ofertas del verano",
    description:
      "Amazon repite jugada. Como ya hizo el año pasado, el Prime Day de 2023 serán dos días en lugar de uno solo. Las fechas elegidas ya se han anunciado oficialmente: el Amazon Prime Day 2023 será el 11 y 12 de julio. \n<!-- BREAK 1 -->\nDurante esos dos días, el gi…",
    url: "https://www.xataka.com/otros/amazon-prime-day-2023-oficial-sabemos-cuando-seran-dos-grandes-dias-ofertas-verano",
    urlToImage: "https://i.blogs.es/298ada/prime-day-2023/840_560.jpeg",
    publishedAt: "2023-06-21T07:24:19Z",
    content:
      "Amazon repite jugada. Como ya hizo el año pasado, el Prime Day de 2023 serán dos días en lugar de uno solo. Las fechas elegidas ya se han anunciado oficialmente: el Amazon Prime Day 2023 será el 11 y… [+1692 chars]",
  },
];

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      
        <div className="App">
        <Navigation />
        <Header />
        <Main cards={cards} />
        <About />
        <Footer />
        <ModalWithForm />
        {/*<SavedNews />*/}
      </div>

      }/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
