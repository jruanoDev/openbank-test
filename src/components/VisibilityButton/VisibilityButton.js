import "./VisibilityButton.scss";

import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as VisibilityIcon } from "../../assets/img/visibility.svg";
import { ReactComponent as VisibilityOffIcon } from "../../assets/img/visibility_off.svg";

const VisibilityButton = ({ type, onClick }) => {
  return (
    <button className="VisibilityButton" onClick={() => onClick(type)}>
      {type === "password" ? (
        <VisibilityIcon width="26" height="26" fill="#6b6b6b" />
      ) : (
        <VisibilityOffIcon width="26" height="26" fill="#6b6b6b" />
      )}
    </button>
  );
};

VisibilityButton.defaultProps = {
  type: "password",
};

VisibilityButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VisibilityButton;
