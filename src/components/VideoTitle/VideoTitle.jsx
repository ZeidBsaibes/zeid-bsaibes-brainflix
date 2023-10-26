import React from "react";
import "./VideoTitle.scss";

function VideoTitle({ title }) {
  return (
    <div className="video-title">
      <h1 className="video-title__title">{title}</h1>
    </div>
  );
}

export default VideoTitle;
