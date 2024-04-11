import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__author">&copy; Developed by Abel Cutz 2024</div>
      <div className="footer__links">
        <div className="footer__links-wrapper">
          <div className="footer__links-items">
            <h2> Github</h2>
            <Link
              className="social-icon-link"
              to="https://github.com/AbelCutz/dragon-ball-frontend"
              target="_blank"
            >
              <FaGithub className="footer__social-logo" />
            </Link>
          </div>
          <div className="footer__links-items">
            <h2>Linkedin</h2>
            <Link
              className="social-icon-link"
              to="https://github.com/AbelCutz/dragon-ball-frontend"
              target="_blank"
            >
              <FaLinkedin className="footer__social-logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
