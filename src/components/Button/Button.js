import "./Button.scss";

import React from "react";

import { ReactComponent as LoadingSpinner } from "../../assets/img/spinner.svg";

const Button = ({
  type,
  endAddornment,
  children,
  onClick,
  disabled,
  loading,
  color = "secondary", // falta default props
}) => {
  const buttonType = type === "filled" ? "Button-filled" : "Button";
  const buttonColor = `color-${color}`;

  return (
    <button
      className={[buttonType, buttonColor].join(" ")}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {children}
          {endAddornment && (
            <div className="Button-endAddornment">{endAddornment}</div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
