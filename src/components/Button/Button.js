import "./Button.scss";

import React from "react";

const Button = ({ type, endAddornment, children, onClick }) => {
  const buttonClass = type === "filled" ? "Button-filled" : "Button";
  return (
    <button className={buttonClass} onClick={() => onClick()}>
      {children}
      {endAddornment && (
        <div className="Button-endAddornment">{endAddornment}</div>
      )}
    </button>
  );
};

export default Button;
