import "./VisibilityButton.scss";

import React from "react";

import { ReactComponent as VisibilityIcon } from "../../assets/img/visibility.svg";
import { ReactComponent as VisibilityOffIcon } from "../../assets/img/visibility_off.svg";

const VisibilityButton = ({ type, onClick }) => {
  return (
    <button className="VisibilityButton" onClick={() => onClick(type)}>
      {type === "password" ? (
        <VisibilityIcon width="26" height="26" fill="#595959" />
      ) : (
        <VisibilityOffIcon width="26" height="26" fill="#595959" />
      )}
    </button>
  );
};

export default VisibilityButton;
