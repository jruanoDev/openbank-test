import "./TextField.scss";

import PropTypes from "prop-types";
import React, { useState } from "react";

import VisibilityButton from "../VisibilityButton/VisibilityButton";

const Label = ({ children, labelFor }) => (
  <label htmlFor={labelFor} className="TextField-label">
    {children}
  </label>
);

const LenghtCounter = ({ value, max }) => (
  <span className="TextField-length-counter">
    {value.length} / {max}
  </span>
);

const ErrorMessage = ({ children }) => (
  <p className="TextField-error">{children}</p>
);

const TextField = ({
  label,
  placeHolder,
  type,
  maxLength,
  value,
  onChange,
  id,
  name,
  tabIndex,
  error,
}) => {
  const [inputType, setInputType] = useState(type);

  const onVisibilityEnabled = (type) =>
    setInputType(type === "password" ? "text" : "password");

  return (
    <div className="TextField">
      <Label labelFor={id}>
        {label}
        <div className="TextField-container">
          <input
            name={name}
            id={id}
            className={`TextField-input ${
              error ? "TextField-input-error" : ""
            }`}
            placeholder={placeHolder}
            type={inputType}
            value={value}
            maxLength={maxLength}
            onChange={(e) => onChange(e)}
            tabIndex={tabIndex}
          />
          {type === "password" && (
            <VisibilityButton type={inputType} onClick={onVisibilityEnabled} />
          )}
          {maxLength && <LenghtCounter max={maxLength} value={value} />}
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Label>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  value: "",
};

TextField.propTypes = {
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.string,
  error: PropTypes.string,
};

export default TextField;
