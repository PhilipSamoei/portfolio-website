import React from 'react'

//import styles
import '../css/Footer.css';

//icons for social links
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="contact-details">
                  <h4>My Contacts Details</h4>
                  <p className="phone">PHONE</p>
                  <p>0768608032</p>
                  <p>EMAIL</p>
                  <p>philipkerich188@gmail.com</p>
                  <p>ADDRESS</p>
                  <p>Nairobi, Kenya</p>
            </div>
      <p className="copyright"> Copyright  &copy; {currentYear} . All rights reserved. </p>
          <div className='social-links'>
              <a href="https://www.instagram.com/k.e.r.i.c.h_/" className=" social">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/philip-kerich-5a0858273/" className=" social">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://web.facebook.com/phil.kerich/" className=" social">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://github.com/PhilipSamoei" className=" social">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com/Kerich1Philip" className="social" >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <div>

              </div>
              
          </div>
    </footer>
  )
}

export default Footer