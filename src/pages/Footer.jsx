import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="contact-details">
        <h4>Contact Details</h4>
        <p className="phone">PHONE</p>
        <p>0768608032</p>
        <p>EMAIL</p>
        <p>philipkerich188@gmail.com</p>
        <p>ADDRESS</p>
        <p>Nairobi, Kenya</p>
      </div>
      <p className="copyright">
        Copyright &copy; {currentYear}. All rights reserved.
      </p>
      <div className="social-links">
        <a
          href="https://www.instagram.com/k.e.r.i.c.h_/"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/philip-kerich-5a0858273/"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} alt="LinkedIn" />
        </a>
        <a
          href="https://web.facebook.com/phil.kerich/"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} alt="Facebook" />
        </a>
        <a
          href="https://github.com/PhilipSamoei"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} alt="GitHub" />
        </a>
        <a
          href="https://twitter.com/Kerich1Philip"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
