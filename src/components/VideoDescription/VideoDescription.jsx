import React from "react";
import "./VideoDescription.scss";

function VideoDescription({ description }) {
  return (
    <div className="videodescription">
      <p className="videodescription__text">{description}</p>
    </div>
  );
}

export default VideoDescription;
