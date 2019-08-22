import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import NavItem from "components/navigation/NavItem";

function Navbar({ className, history: { push }, location: { pathname } }) {
  const [dropdownOpen, setDropdownStatus] = useState(false);

  function onDirectionHandler(e, pushLocation) {
    e.preventDefault();

    if (pushLocation) push(pushLocation);
  }

  function onClickHandler(e) {
    e.preventDefault();

    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight) {
      const dropdownUl = document.querySelector(".navigation-ul"),
        bars = document.querySelector(".fa-bars");

      if (dropdownOpen) {
        dropdownUl.classList.remove("appear");
        bars.classList.remove("rotate");
        dropdownUl.classList.add("d-none");
        setDropdownStatus(false);
      } else {
        dropdownUl.classList.remove("d-none");
        dropdownUl.classList.add("appear");
        bars.classList.add("rotate");
        setDropdownStatus(true);
      }
    }
  }

  return (
    <nav className={`${className} navigation-nav`}>
      <ul className="navigation-ul">
        {pathname === "/" || (
          <NavItem value="Home" onClick={e => onDirectionHandler(e, "/")} />
        )}
        {pathname === "/skills" || (
          <NavItem
            value="Skills"
            onClick={e => onDirectionHandler(e, "/skills")}
          />
        )}
        {pathname === "/projects" || (
          <NavItem
            value="Projects"
            onClick={e => onDirectionHandler(e, "/projects")}
          />
        )}
        {pathname === "/contact" || (
          <NavItem
            value="Contact"
            onClick={e => onDirectionHandler(e, "/contact")}
          />
        )}
      </ul>
      <i className="fas fa-bars fa-2x" onClick={e => onClickHandler(e)} />
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

Navbar.defaultProps = {
  className: ""
};

export default withRouter(Navbar);
