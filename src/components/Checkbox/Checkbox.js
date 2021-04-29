import "./Checkbox.scss";

import PropTypes from "prop-types";
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

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default Checkbox;
