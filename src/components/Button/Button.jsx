import "./Button.scss";
import React from "react";

import "../../styles/partials/_colours.scss";

function Button({ text, icon, handleClick, bgColour, textColour }) {
  const style1 = { backgroundImage: `url(${icon})` };
  const style2 = { backgroundColor: `${bgColour}` };
  const style3 = { color: `${textColour}` };
  return (
    <button
      className="form-button__button"
      style={{ ...style1, ...style2, ...style3 }}
      type="submit"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
