import "./TextField.scss";

import React, { useState } from "react";

import VisibilityButton from "../VisibilityButton/VisibilityButton";

const Label = ({ children }) => (
  <label className="TextField-label">{children}</label>
);

const LenghtCounter = ({ value, max }) => (
  <span className="TextField-length-counter">
    {value.length} / {max}
  </span>
);

const TextField = ({
  label,
  placeHolder,
  type,
  maxLength,
  value,
  onChange,
}) => {
  const [inputType, setInputType] = useState(type);

  const onVisibilityEnabled = (type) =>
    setInputType(type === "password" ? "text" : "password");

  return (
    <div className="TextField">
      <Label>{label}</Label>
      <div className="TextField-container">
        <input
          className="TextField-input"
          placeholder={placeHolder}
          type={inputType}
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <VisibilityButton type={inputType} onClick={onVisibilityEnabled} />
        )}
        {maxLength && <LenghtCounter max={maxLength} value={value} />}
      </div>
    </div>
  );
};

export default TextField;
