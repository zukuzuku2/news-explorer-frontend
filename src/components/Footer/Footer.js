import { Link } from "react-router-dom";
import "./Footer.css";
import gitHubImage from "../../images/github.png";
import facebookImage from "../../images/fb.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__link-container">
          <Link className="footer__link" to="/">
            Inicio
          </Link>
          <Link className="footer__link" to="/">
            Practicum
          </Link>
        </div>
        <div className="footer__social-container">
          <img className="footer__social-logo" src={gitHubImage} alt="github" />
          <img
            className="footer__social-logo"
            src={facebookImage}
            alt="facebook"
          />
        </div>
        <p className="footer__copyright">
          &copy; 2023 Supersite, Powered by News API
        </p>
      </footer>
    </>
  );
}
