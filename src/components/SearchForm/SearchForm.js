import "./SearchForm.css";
function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form__input" placeholder="Naturaleza" />
      <button className="form__button">
        <p className="form__button-text">Buscar</p>
      </button>
    </form>
  );
}

export default SearchForm;
