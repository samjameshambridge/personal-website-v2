import React from "react";
import PropTypes from "prop-types";

function SecondaryTitle({ className, value }) {
  return <h3 className={className}>{value}</h3>;
}

SecondaryTitle.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};

SecondaryTitle.defaultProps = {
  className: ""
};

export default SecondaryTitle;
