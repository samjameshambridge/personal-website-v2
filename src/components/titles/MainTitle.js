import React from "react";
import PropTypes from "prop-types";

function MainTitle({ className, value }) {
  return <h1 className={`primary-title ${className}`}>{value}</h1>;
}

MainTitle.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired
};

MainTitle.defaultProps = {
  className: ""
};

export default MainTitle;
