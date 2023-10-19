import "./Button.scss";
import React from "react";

function Button({ text, icon }) {
  return (
    <div className="form-button">
      <button
        className="form-button__button"
        style={{ backgroundImage: `url(${icon})` }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
