import React from "react";
import "./HeaderLogo.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

function HeaderLogo() {
  return (
    <div className="headerlogo">
      <Link to="/">
        <img className="headerlogo__image" src={Logo} alt="BrainFlix Logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
