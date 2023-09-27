import React from "react";
import PropTypes from "prop-types";

import "./containedbtn.scss";

function ContainedButton({ name, type }) {
  return <button className={`btn-${type}`}>{name}</button>;
}

ContainedButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ContainedButton;
