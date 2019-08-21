import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import MainTitle from "components/titles/MainTitle";

// orinda books mockup images import
import OrindaLaptopMockup from "img/mockups/orinda-laptop-mockup.png";
import OrindaMobileMockup from "img/mockups/orinda-mobile-mockup.png";
import OrindaTabletMockup from "img/mockups/orinda-tablet-mockup.png";
// granite city mockup images import
import GraniteLaptopMockup from "img/mockups/granite-laptop-mockup.png";
import GraniteMobileMockup from "img/mockups/granite-mobile-mockup.png";
import GraniteTabletMockup from "img/mockups/granite-tablet-mockup.png";
// lotus mockup images import
import LotusLaptopMockup from "img/mockups/lotus-laptop-mockup.png";
import LotusMobileMockup from "img/mockups/lotus-mobile-mockup.png";
import LotusTabletMockup from "img/mockups/lotus-tablet-mockup.png";

// video
import LotusVideoSrc from "video/lotus-demo.mp4";
import OrindaVideoSrc from "video/orinda-books-demo.mp4";
import GraniteVideoSrc from "video/granite-city-demo.mp4";

class SpecificProjectPage extends Component {
  componentDidMount() {
    document.getElementById("tablet").classList.add("focus");
  }

  onMouseOverHandler = e => {
    const mockupsArray = document.querySelectorAll(
      ".specific-project-page-mockup"
    );

    // unfocus all mockup images
    mockupsArray.forEach(
      mockup => (mockup.className = "specific-project-page-mockup")
    );

    // set focus img
    e.target.classList.add("focus");
  };

  render() {
    const {
      location: { pathname }
    } = this.props;

    return (
      <div className="full-page-container specific-project-full-container">
        <div className="specific-project-page-container">
          <MainTitle
            className="secondary-page-main-title"
            value={
              pathname === "/projects/orinda-books"
                ? "Orinda Books"
                : pathname === "/projects/granite-city"
                ? "Granite City"
                : "Lotus"
            }
          />
          <div className="specific-project-content-container">
            <div className="specific-project-central-container">
              <video controls>
                <source
                  type="video/mp4"
                  src={
                    pathname === "/projects/orinda-books"
                      ? OrindaVideoSrc
                      : pathname === "/projects/granite-city"
                      ? GraniteVideoSrc
                      : LotusVideoSrc
                  }
                />
              </video>
              <p>
                {pathname === "/projects/orinda-books"
                  ? "Orinda Books allows staff to maintain databases of their Staff, Inventory, Orders, Events and Tasks. Firebase services are used for Cloud Storage, User Authentication and NoSql database querying."
                  : pathname === "/projects/granite-city"
                  ? "Granite City is an ecommerce website allowing users to browse the gym store and purchase items. The application is written with React using a JSON file loading client-side to sync with the Redux store."
                  : "Lotus is a meditation app for users to listen / watch and meditate to. This application is written with HTML-5 using CSS-3 and SASS for styling. All functionality comes from vanilla Javascript."}
              </p>
              <div className="specific-project-description-links">
                <a
                  href={
                    pathname === "/projects/orinda-books"
                      ? "https://github.com/samjameshambridge/orinda-books"
                      : pathname === "/projects/granite-city"
                      ? "https://github.com/samjameshambridge/granite-city"
                      : "https://github.com/samjameshambridge/lotus"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {pathname === "/projects/orinda-books"
                    ? "https://github.com/samjameshambridge/orinda-books"
                    : pathname === "/projects/granite-city"
                    ? "https://github.com/samjameshambridge/granite-city"
                    : "https://github.com/samjameshambridge/lotus"}
                </a>
                <a
                  href={
                    pathname === "/projects/orinda-books"
                      ? "https://samjameshambridge.github.io/orinda-books/"
                      : pathname === "/projects/granite-city"
                      ? "https://samjameshambridge.github.io/Granite-City/"
                      : "https://samjameshambridge.github.io/Granite-City/"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {pathname === "/projects/orinda-books"
                    ? "https://samjameshambridge.github.io/orinda-books/"
                    : pathname === "/projects/granite-city"
                    ? "https://samjameshambridge.github.io/Granite-City/"
                    : "https://samjameshambridge.github.io/Granite-City/"}
                </a>
              </div>
            </div>
            <div className="specific-project-mockups-container">
              <div className="specific-project-mockups-group">
                <img
                  src={
                    pathname === "/projects/orinda-books"
                      ? OrindaLaptopMockup
                      : pathname === "/projects/granite-city"
                      ? GraniteLaptopMockup
                      : LotusLaptopMockup
                  }
                  className="specific-project-page-mockup"
                  id="laptop"
                  alt="laptop mockup"
                  onMouseOver={e => this.onMouseOverHandler(e)}
                />
                <img
                  src={
                    pathname === "/projects/orinda-books"
                      ? OrindaTabletMockup
                      : pathname === "/projects/granite-city"
                      ? GraniteTabletMockup
                      : LotusTabletMockup
                  }
                  className="specific-project-page-mockup"
                  alt="tablet mockup"
                  id="tablet"
                  onMouseOver={e => this.onMouseOverHandler(e)}
                />
                <img
                  src={
                    pathname === "/projects/orinda-books"
                      ? OrindaMobileMockup
                      : pathname === "/projects/granite-city"
                      ? GraniteMobileMockup
                      : LotusMobileMockup
                  }
                  className="specific-project-page-mockup"
                  alt="mobile mockup"
                  id="mobile"
                  onMouseOver={e => this.onMouseOverHandler(e)}
                />
              </div>
              <div className="specific-project-yellow-trapezoid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SpecificProjectPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(SpecificProjectPage);
