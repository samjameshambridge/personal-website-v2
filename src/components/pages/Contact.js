import React, { useEffect } from "react";

import MainTitle from "components/titles/MainTitle";

import GithubLogo from "img/github-logo.png";
import InstagramLogo from "img/instagram-logo.png";
import LinkedinLogo from "img/linkedin-logo.png";

function Contact() {
  useEffect(() => {
    const content = document.querySelector(".contact-content-container");

    let newHeight = `${window.innerHeight - content.offsetTop}px`;

    content.style.height = newHeight;
  });

  return (
    <div className="full-page-container contact-container-full-page">
      <div className="contact-page-container">
        <MainTitle className="secondary-page-main-title" value="Contact" />
        <div className="contact-content-container">
          <div className="contact-info">
            <p>samjameshambridge@hotmail.com</p>
            <p>07340471548</p>
          </div>
          <div className="social-media-info">
            <a
              href="https://github.com/samjameshambridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="github logo" />
            </a>
            <a
              href="https://linkedin.com/samjameshambridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinLogo} alt="linkedin logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-hambridge-2a168816b/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={InstagramLogo} alt="instagram logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
