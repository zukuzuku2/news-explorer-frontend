import { useForm } from "react-hook-form";
import "./ModalWithForm.css";
import closeButton from "../../images/close.png";

function ModalWithForm({ title }, props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="modal-form__container NoVisible">
      <form className="modal-form NoVisible" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal-form__title">{`Iniciar sesión`}</h3>
        <img
          className="modal-form__close"
          src={closeButton}
          alt="Imagen para cerrar modal"
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
        {props.SignUp ? (
          <input
            className="modal-form__input"
            name="name"
            type="text"
            {...register("name", { required: true })}
          />
        ) : null}
        <button className="modal-form__button" type="submit">
          Iniciar sesión
        </button>
        <p className="modal-form__text">
          o <span className="modal-form__text_span">Inscribirse</span>
        </p>
      </form>
    </div>
  );
}

export default ModalWithForm;
