import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "css/App.css";

import Contact from "components/pages/Contact";
import Home from "components/pages/Home";
import Navbar from "components/navigation/Navbar";
import NotFound from "components/pages/NotFound";
import SpecificProjectPage from "components/pages/SpecificProjectPage";
import Projects from "components/pages/Projects";
import Skills from "components/pages/Skills";

class App extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });

    window.scrollTo(0, 0);

    if (window.requestFullscreen) {
      window.requestFullscreen();
    } else if (window.webkitrequestFullscreen) {
      window.webkitrequestFullscreen();
    } else if (window.mozrequestFullscreen) {
      window.mozrequestFullscreen();
    } else if (window.msrequestFullscreen) {
      window.msrequestFullscreen();
    }
  }

  render() {
    if ((window.innerWidth > window.innerHeight) & (window.innerWidth > 768)) {
      return (
        <Router>
          <Navbar />
          <Route
            render={({ location }) => (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames="transition"
                  appear
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/projects" component={Projects} />
                    <Route
                      exact
                      path="/projects/orinda-books"
                      component={SpecificProjectPage}
                    />
                    <Route
                      exact
                      path="/projects/granite-city"
                      component={SpecificProjectPage}
                    />
                    <Route
                      exact
                      path="/projects/lotus"
                      component={SpecificProjectPage}
                    />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Router>
      );
    } else {
      return (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
