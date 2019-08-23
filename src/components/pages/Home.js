import React from "react";

import MainTitle from "components/titles/MainTitle";
import ProfilePicture from "img/profile-picture.png";
import SecondaryTitle from "components/titles/SecondaryTitle";

function Home() {
  return (
    <div className="home-container full-page-container">
      <div className="home-right-side-container">
        <div className="home-titles-container">
          <MainTitle className="home-main-title" value="Sam Hambridge" />
          <div className="home-titles-secondary-group">
            <SecondaryTitle
              className="home-titles-developer"
              value="Front End Developer"
            />
            <a
              href="https://github.com/samjameshambridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryTitle
                className="home-titles-github"
                value="https://github.com/samjameshambridge"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="home-img-container">
        <img
          className="home-profile-picture"
          src={ProfilePicture}
          alt="Profile of Self"
        />
        <div className="home-yellow-trapezoid" />
        <div className="home-blue-rectangle" />
      </div>
    </div>
  );
}

export default Home;
