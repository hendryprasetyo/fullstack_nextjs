import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footStyles from "./Footer.module.css";
export default function Footer({ home, about, galery, pres, contact }) {
  return (
    <footer className={footStyles.footer}>
      <a href="#" className={footStyles.footer__logo}>
        HENDRY
      </a>

      <ul className={footStyles.permalinks}>
        <li>
          <a href="#">{home}</a>
        </li>
        <li>
          <a href="#about">{about}</a>
        </li>
        <li>
          <a href="#galery">{galery}</a>
        </li>
        <li>
          <a href="#testimonials">{pres}</a>
        </li>
        <li>
          <a href="#contact">{contact}</a>
        </li>
      </ul>

      <div className={footStyles.footer__socials}>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>

      <div className={footStyles.footer__copyright}>
        <small>&copy; Hendry Prasetyo. All rights reserved.</small>
      </div>
    </footer>
  );
}
