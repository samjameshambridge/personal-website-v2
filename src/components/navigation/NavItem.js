import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavItem({ onClick, value }) {
  return (
    <li className="nav-item">
      <Link onClick={onClick}>{value}</Link>
    </li>
  );
}

NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default NavItem;
