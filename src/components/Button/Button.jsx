import "./Button.scss";
import React from "react";

function Button({ text, icon, handleClick }) {
  return (
    <div className="form-button">
      <button
        className="form-button__button"
        style={{ backgroundImage: `url(${icon})` }}
        onClick={() => {
          if (handleClick) {
            handleClick();
          }
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
