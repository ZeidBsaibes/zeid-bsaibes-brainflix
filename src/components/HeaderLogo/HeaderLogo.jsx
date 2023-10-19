import React from "react";
import "./HeaderLogo.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";

function HeaderLogo() {
  return (
    <div className="headerlogo">
      <img className="headerlogo__image" src={Logo} alt="BrainFlix Logo" />
    </div>
  );
}

export default HeaderLogo;
