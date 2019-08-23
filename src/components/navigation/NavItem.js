import React from "react";
import PropTypes from "prop-types";

function NavItem({ onClick, value }) {
  return (
    <li className="nav-item" onClick={onClick}>
      {value}
    </li>
  );
}

NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default NavItem;
