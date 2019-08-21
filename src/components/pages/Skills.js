import React, { Component } from "react";
import { Link } from "react-router-dom";

import MainTitle from "components/titles/MainTitle";
import SecondaryTitle from "components/titles/SecondaryTitle";

// image imports
import BootstrapImg from "img/bootstrap.png";
import CSSImg from "img/css.png";
import FirebaseImg from "img/firebase.jpg";
import GitImg from "img/git.png";
import HtmlImg from "img/html.png";
import ReactImg from "img/react.png";
import ReduxImg from "img/redux.png";
import SassImg from "img/sass.jpg";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusSkill: "React",
      listenersOn: false
    };
  }

  componentDidMount() {
    const skillImgsArray = document.querySelectorAll(".skill-img");

    // set listeners for hover animations
    if (!this.state.listenersOn) {
      this.setState({ listenersOn: true });

      skillImgsArray.forEach(img => {
        img.addEventListener("mouseover", e => {
          // on mouseover, deactive all other images
          skillImgsArray.forEach(img => (img.className = "skill-img"));

          // add the active class to the e.target
          e.target.classList.add("active");

          this.setState({ focusSkill: e.target.getAttribute("value") });
        });
      });
    }
  }

  render() {
    const { focusSkill } = this.state;
    return (
      <div className="full-page-container skills-container-full-page">
        <div className="skills-content-container">
          <MainTitle className="secondary-page-main-title" value="Skills" />
          <div className="top-half-container">
            <div className="skills-img-content-container">
              <div className="skills-img-set">
                <img
                  className="skill-img"
                  id="react-widget"
                  src={ReactImg}
                  value="React"
                  alt="react widget"
                />
                <img
                  className="skill-img"
                  src={ReduxImg}
                  value="Redux"
                  alt="redux widget"
                />
                <img
                  className="skill-img"
                  src={FirebaseImg}
                  value="Firebase"
                  alt="firebase widget"
                />
                <img
                  className="skill-img"
                  src={BootstrapImg}
                  value="Bootstrap"
                  alt="bootstrap widget"
                />
                <img
                  className="skill-img"
                  src={SassImg}
                  value="Sass"
                  alt="sass widget"
                />
                <img
                  className="skill-img"
                  src={GitImg}
                  value="Git"
                  alt="git widget"
                />
                <img
                  className="skill-img"
                  src={CSSImg}
                  value="CSS-3"
                  alt="css widget"
                  id="css-widget"
                />
                <img
                  className="skill-img"
                  src={HtmlImg}
                  value="HTML-5"
                  alt="html widget"
                  id="html-widget"
                />
              </div>
              <div className="skills-trapezoids-set">
                <div className="skills-yellow-trapezoid" />
                <div className="skills-blue-trapezoid" />
              </div>
            </div>
          </div>
          <div className="bottom-half-container">
            <div className="skills-info-card">
              <div className="skills-card-top-group">
                <SecondaryTitle value={focusSkill} />
                <Link
                  className={`skills-specific-project-link ${
                    focusSkill === "Git" || focusSkill === "Bootstrap"
                      ? "display-none"
                      : ""
                  }`}
                  to={
                    focusSkill === "React" || focusSkill === "Sass"
                      ? "/projects/granite-city"
                      : focusSkill === "Redux" || focusSkill === "Firebase"
                      ? "/projects/orinda-books"
                      : "/projects/lotus"
                  }
                >
                  Visit a Project
                </Link>
              </div>
              <div className="skills-card-bottom-group">
                <p>
                  {focusSkill === "React"
                    ? "I write single page web applications in React using the Context API for state management in smaller applications and Redux for larger applications. This is one such application. To view other projects in React, check out my Projects section."
                    : focusSkill === "Redux"
                    ? "Whenever I write a single page application that gets too big for React's Context API, I normally use Redux for state management."
                    : focusSkill === "Firebase"
                    ? "I implement back-end systems using Firebase to deliver features such as User Authentication, Cloud Storage and NoSQL Database querying. I am hoping that in the future I will learn back-end development (most likely, Node)."
                    : focusSkill === "Bootstrap"
                    ? "Bootstrap is my go-to CSS framework, I'm very well-versed with it and when I'm making something small, I normally use it."
                    : focusSkill === "Sass"
                    ? "Sass is a blessing. I have used Less before but primarily I write in Sass simply because I discovered it first. I use both Koala and the Live Sass Compiler in VS Code for compilation."
                    : focusSkill === "Git"
                    ? "I version control all my projects from the command line and everything is available for viewing on my github page (www.github.com/samjameshambridge)"
                    : focusSkill === "CSS-3"
                    ? "I style all my projects with modern CSS-3, writing clear and accessible code."
                    : "I have a strong understanding of modern HTML-5, I' currently taking a lot of time learning accessibility and implementing ARIA features in my web projects."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
