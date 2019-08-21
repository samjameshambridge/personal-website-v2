import React, { Component } from "react";
import { Link } from "react-router-dom";

import MainTitle from "../titles/MainTitle";
import SecondaryTitle from "../titles/SecondaryTitle";

// images import
import GraniteLaptopMockup from "img/mockups/granite-laptop-mockup.png";
import GraniteMobileMockup from "img/mockups/granite-mobile-mockup.png";
import LotusLaptopMockup from "img/mockups/lotus-laptop-mockup.png";
import LotusMobileMockup from "img/mockups/lotus-mobile-mockup.png";
import OrindaLaptopMockup from "img/mockups/orinda-laptop-mockup.png";
import OrindaMobileMockup from "img/mockups/orinda-mobile-mockup.png";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusBar: "orinda-books"
    };
  }

  componentDidMount() {
    const container = document.querySelector(".projects-content-container");

    let newHeight = `${window.innerHeight - container.offsetTop}px`;

    container.style.height = newHeight;
  }

  mouseOverHandler = e => {
    if (!e.target.classList.contains("project-bar")) {
      let parent = e.target;

      while (!parent.classList.contains("project-bar"))
        parent = parent.parentElement;

      this.setState({ focusBar: parent.id });
      this.changeBarDisplay(parent);
    } else {
      this.setState({ focusBar: e.target.id });
      this.changeBarDisplay(e.target);
    }
  };

  changeBarDisplay = elem => {
    const projectBarsArray = document.querySelectorAll(".project-bar");

    // remove the active class from all project bars
    projectBarsArray.forEach(bar => (bar.className = "project-bar"));

    // add active class to the focus bar
    elem.className = "project-bar active-bar";
  };

  render() {
    const { focusBar } = this.state;

    return (
      <div className="full-page-container projects-container-full-page">
        <div className="projects-page-container">
          <MainTitle className="secondary-page-main-title" value="Projects" />
          <div className="projects-content-container">
            <div className="projects-left-side-container">
              <div className="projects-info-container">
                <SecondaryTitle
                  className="projects-specific-secondary-title"
                  value={
                    focusBar === "orinda-books"
                      ? "Orinda Books"
                      : focusBar === "granite-city"
                      ? "Granite City"
                      : "Lotus"
                  }
                />
                <p>
                  {focusBar === "orinda-books"
                    ? "React / Redux / Firebase"
                    : focusBar === "granite-city"
                    ? "React / Sass"
                    : "Javascript / Sass / HTML-5"}
                </p>
                <p className="project-info-description">
                  {focusBar === "orinda-books"
                    ? "Full stack application for a mockup bookstores administration panel."
                    : focusBar === "granite-city"
                    ? "React application for a mockup rock climbing gym."
                    : "Javascript meditation application written in HTML-5 & CSS-3."}
                </p>
                <a
                  className="project-info-github-link"
                  href={
                    focusBar === "orinda-books"
                      ? "https://github.com/samjameshambridge/orinda-books"
                      : focusBar === "granite-city"
                      ? "https://github.com/samjameshambridge/granite-city"
                      : "https://github.com/samjameshambridge/lotus"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {focusBar === "orinda-books"
                    ? "https://github.com/samjameshambridge/orinda-books"
                    : focusBar === "granite-city"
                    ? "https://github.com/samjameshambridge/granite-city"
                    : "https://github.com/samjameshambridge/lotus"}
                </a>
                <Link
                  to={
                    focusBar === "orinda-books"
                      ? "/projects/orinda-books"
                      : focusBar === "granite-city"
                      ? "/projects/granite-city"
                      : "/projects/lotus"
                  }
                  className="projects-learn-more-button standard-btn-theme"
                >
                  Learn More
                </Link>
              </div>
              <div className="yellow-box-background" />
            </div>
            <div className="projects-right-side-container">
              <div
                className="project-bar active-bar"
                id="orinda-books"
                onMouseEnter={e => this.mouseOverHandler(e)}
              >
                <div className="project-bar-mockup-group">
                  <img
                    src={OrindaLaptopMockup}
                    className="laptop-mockup"
                    alt="Laptop Screen with Orinda Books"
                  />
                  <img
                    src={OrindaMobileMockup}
                    alt="mobile mockup"
                    className="mobile-mockup"
                  />
                </div>
                <div className="project-bar-button-group">
                  <a
                    href="https://samjameshambridge.github.io/orinda-books/"
                    className="projects-visit-button small-btn-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/samjameshambridge/orinda-books/"
                    className="projects-github-button small-btn-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div
                className="project-bar"
                id="granite-city"
                onMouseEnter={e => this.mouseOverHandler(e)}
              >
                <div className="project-bar-mockup-group">
                  <img
                    src={GraniteLaptopMockup}
                    className="laptop-mockup"
                    alt="Laptop screen with Granite City"
                  />
                  <img
                    src={GraniteMobileMockup}
                    alt="mobile mockup"
                    className="mobile-mockup"
                  />
                </div>

                <div className="project-bar-button-group">
                  <a
                    href="https://samjameshambridge.github.io/Granite-City/"
                    className="projects-visit-button small-btn-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/samjameshambridge/granite-city"
                    className="projects-github-button small-btn-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div
                className="project-bar"
                id="lotus"
                onMouseEnter={e => this.mouseOverHandler(e)}
              >
                <div className="project-bar-mockup-group">
                  <img
                    src={LotusLaptopMockup}
                    className="laptop-mockup"
                    alt="Laptop screen with Lotus.png"
                  />
                  <img
                    src={LotusMobileMockup}
                    alt="mobile mockup"
                    className="mobile-mockup"
                  />
                </div>

                <div className="project-bar-button-group">
                  <a
                    href="https://samjameshambridge.github.io/Lotus/"
                    className="projects-visit-button small-btn-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                  <a
                    href="https://github.com/samjameshambridge/Lotus"
                    className="projects-github-button small-btn-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
