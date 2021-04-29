import "./Button.scss";

import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as LoadingSpinner } from "../../assets/img/spinner.svg";

const Button = ({
  type,
  endAddornment,
  children,
  onClick,
  disabled,
  loading,
  color,
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

Button.defaultProps = {
  disabled: false,
  loading: false,
  color: "secondary",
};

Button.propTypes = {
  type: PropTypes.string,
  endAddornment: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
