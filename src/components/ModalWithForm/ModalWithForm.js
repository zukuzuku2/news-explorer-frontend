import { useForm } from "react-hook-form";
import "./ModalWithForm.css";
import closeButton from "../../images/close.png";
import { useState } from "react";
import { useAuth } from "../../utils/AuthContext";

function ModalWithForm({ isOpen, setUser }) {
  const auth = useAuth();
  const [isRegistered, setIsRegistered] = useState(false);
  function handleRegister() {
    setIsRegistered(!isRegistered);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (isRegistered) {
      auth.login(e.email, e.password);
    } else {
      auth.register(e.email, e.password, e.name);
      setIsRegistered(true);
    }
  };

  return (
    <div className={isOpen ? "modal-form__container" : "NoVisible"}>
      <form
        className={isOpen ? "modal-form" : "NoVisible"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="modal-form__title">
          {isRegistered ? "Iniciar sesión" : "Inscribirse"}
        </h3>
        <img
          className="modal-form__close"
          src={closeButton}
          alt="Imagen para cerrar modal"
          onClick={isOpen}
        />
        <label className="modal-form__label modal-form__label_mail">
          Correo electrónico
        </label>
        <input
          className="modal-form__input"
          name="email"
          type="email"
          placeholder="Introduce tu correo electrónico"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
        />
        {errors.email?.type === "required" && (
          <p className="modal-form__error">
            Dirección de correo electrónico no válida
          </p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="modal-form__error">
            Dirección de correo electrónico no válida
          </p>
        )}
        <label className="modal-form__label">Contraseña</label>
        <input
          className="modal-form__input"
          name="password"
          type="password"
          placeholder="Introduce tu contraseña"
          {...register("password", { required: true })}
        />
        {!isRegistered ? (
          <label className="modal-form__label">Nombre de usuario</label>
        ) : null}
        {!isRegistered ? (
          <input
            className="modal-form__input"
            name="name"
            type="text"
            {...register("name", { required: true })}
          />
        ) : null}
        <button className="modal-form__button" type="submit">
          {isRegistered ? "Iniciar sesión" : "Inscribirse"}
        </button>
        <p className="modal-form__text" onClick={handleRegister}>
          o{" "}
          {isRegistered ? (
            <span className="modal-form__text_span">Inscribirse</span>
          ) : (
            <span className="modal-form__text_span">Inicia Sesion</span>
          )}
        </p>
      </form>
    </div>
  );
}

export default ModalWithForm;
