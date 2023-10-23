import React from "react";
import Lottie from "lottie-react";
import Animation from "../../assets/lottie/lottie-404.json";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import HomeIcon from "../../assets/icons/home2.svg";

function NotFound() {
  return (
    <div className="lottie">
      <Lottie
        animationData={Animation}
        loop={true}
        className="lottie__animation"
      />
      <h1 className="lottie__title">Page Not Found</h1>
      <Link to="/" className="lottie__button">
        <Button text="BACK HOME" />
      </Link>
    </div>
  );
}

export default NotFound;
