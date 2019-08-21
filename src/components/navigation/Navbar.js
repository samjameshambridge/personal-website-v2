import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import NavItem from "components/navigation/NavItem";

function Navbar({ className, history: { push }, location: { pathname } }) {
  const [dropdownOpen, setDropdownStatus] = useState(false);

  function onClickHandler(e, pushLocation) {
    e.preventDefault();

    if (window.innerWidth < 768 && window.innerWidth < window.innerHeight) {
      const dropdownUl = document.querySelector(".navigation-ul");

      if (dropdownOpen) {
        dropdownUl.style.display = "none";
        dropdownUl.style.opacity = "0";
        setDropdownStatus(false);
      } else {
        dropdownUl.style.display = "flex";
        dropdownUl.style.opacity = "1";
        setDropdownStatus(true);
      }
    }

    if (pushLocation) push(pushLocation);
  }

  return (
    <nav className={`${className} navigation-nav`}>
      <i className="fas fa-bars fa-2x" onClick={e => onClickHandler(e)} />
      <ul className="navigation-ul">
        {pathname === "/" || (
          <NavItem value="Home" onClick={e => onClickHandler(e, "/")} />
        )}
        {pathname === "/skills" || (
          <NavItem value="Skills" onClick={e => onClickHandler(e, "/skills")} />
        )}
        {pathname === "/projects" || (
          <NavItem
            value="Projects"
            onClick={e => onClickHandler(e, "/projects")}
          />
        )}
        {pathname === "/contact" || (
          <NavItem
            value="Contact"
            onClick={e => onClickHandler(e, "/contact")}
          />
        )}
      </ul>
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
