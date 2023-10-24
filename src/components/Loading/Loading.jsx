import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/lottie/loading.json";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loading">
      <h1 className="loading__title">Loading...</h1>
      <Lottie
        animationData={LoadingAnimation}
        loop={true}
        className="loading__animation"
      />
    </div>
  );
}

export default Loading;
