import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import Avatar from "../Avatar/Avatar";

function Header() {
  return (
    <>
      <div className="header">this is the header</div>
      <Logo />
      <SearchForm />
      <Avatar />
    </>
  );
}

export default Header;
