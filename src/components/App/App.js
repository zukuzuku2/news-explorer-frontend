import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../../utils/AuthContext";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Card from "../Card/Card";
import "./App.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import SavedNews from "../SavedNews/SavedNews";

// api.getCards("apple").then((res) => console.log(res));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState("");

  function openPopup() {
    setIsOpen(!isOpen);
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Navigation isLoggedIn={isLoggedIn} isOpen={openPopup} />
                <Header
                  setCards={setCards}
                  setBusqueda={setBusqueda}
                  setPagina={setPagina}
                  busqueda={busqueda}
                />
                <Main
                  cards={cards}
                  setPagina={setPagina}
                  pagina={pagina}
                  busqueda={busqueda}
                  setCards={setCards}
                />
                <About />
                <Footer />
                <ModalWithForm isOpen={isOpen} setUser={setUser} />
                {/*<SavedNews />*/}
              </div>
            }
          />
          <Route
            path="/saved"
            element={
              <div className="App">
                <Navigation isLoggedIn={isLoggedIn} isOpen={openPopup} />
                <SavedNews />
                {cards.length > 0 &&
                  cards.map((card, index) => {
                    return <Card key={index} card={card} />;
                  })}
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
