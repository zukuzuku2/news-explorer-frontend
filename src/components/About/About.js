import aboutImage from "../../images/image-03.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img className="about__image" alt="about" src={aboutImage} />
      <div className="about__paragraph-container">
        <h2 className="about__title">Acerca del autor</h2>
        <div className="about__text-container">
          <p className="about__text">
            Este bloque describe al autor del proyecto. Aquí debe indicar tu
            nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
          </p>
          <p className="about__text">
            También puedes hablar de tu experiencia con Practicum, de lo que
            aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
