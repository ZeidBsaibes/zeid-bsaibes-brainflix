import React from "react";
import "./VideoTitle.scss";

function VideoTitle({ title }) {
  return (
    <div className="video-title">
      <h2 className="video-title__title">{title}</h2>
    </div>
  );
}

export default VideoTitle;
