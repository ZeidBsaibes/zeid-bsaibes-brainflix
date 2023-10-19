import React from "react";
import "./Header.scss";

import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderForm from "../HeaderForm/HeaderForm";

function Header() {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderForm />
    </div>
  );
}

export default Header;
