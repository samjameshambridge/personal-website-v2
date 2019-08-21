import React, { useEffect } from "react";

import MainTitle from "components/titles/MainTitle";

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
            <i className="fab fa-github fa-5x" />
            <i className="fab fa-linkedin fa-5x" />
            <i className="fab fa-instagram fa-5x" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
