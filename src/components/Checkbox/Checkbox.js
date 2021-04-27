import "./Checkbox.scss";

import React from "react";

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div className="Checkbox-container">
      <input
        type="checkbox"
        className="Checkbox"
        id="Checkbox"
        checked={checked}
        onChange={() => onChange()}
      />
      <label htmlFor="Checkbox" className="Checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
