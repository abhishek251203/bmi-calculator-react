import React from "react";

function Input({ name, value, labelText, placeholderText, onAdd }) {
  return (
    <div className="input">
      <label htmlFor="weight" className="input-label">
        {labelText}
      </label>
      <input
        type="text"
        className="input-field"
        placeholder={placeholderText}
        name={name}
        value={value}
        onChange={onAdd}
      />
    </div>
  );
}

export default Input;
