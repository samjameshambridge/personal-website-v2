import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Div100vh from "react-div-100vh";

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

    document.body.height = `${window.innerHeight}px`;
  }

  render() {
    if ((window.innerWidth > window.innerHeight) & (window.innerWidth > 768)) {
      return (
        <Div100vh>
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
        </Div100vh>
      );
    } else {
      return (
        <Div100vh>
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
        </Div100vh>
      );
    }
  }
}

export default App;
