import "../style/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import bootcamp from "../images/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <img className="bootcamp" src={bootcamp} />
          </h3>

          <p className="footer-links">
            <Link to="/" className="link-1">
              Home
            </Link>

            <Link to="about">About</Link>

            <Link to="contact">Contact</Link>
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Jerusalem</span> Mount of olvies
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <Link to="mailto:support@company.com">jerusalem@company.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the Website</span>
            In This Website collect the Most Importent Links of Resources
            Bootcamp
          </p>

          <div className="footer-icons">
            <Link to="https://www.facebook.com/">
              <i className="fab fa fa-facebook "></i>
            </Link>
            <Link to="https://www.instagram.com/">
              <i className="fab fa fa-instagram"></i>
            </Link>
            <Link to="https://il.linkedin.com/">
              <i className="fab fa fa-linkedin"></i>
            </Link>
            <Link to="https://github.com/">
              <i className="fab fa fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
