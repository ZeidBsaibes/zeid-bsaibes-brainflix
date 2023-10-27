import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/lottie/loading.json";
import "./Loading.scss";

function Loading({ title }) {
  return (
    <div className="loading">
      <h1 className="loading__title">{title}</h1>
      <Lottie
        animationData={LoadingAnimation}
        loop={true}
        className="loading__animation"
      />
    </div>
  );
}

export default Loading;
