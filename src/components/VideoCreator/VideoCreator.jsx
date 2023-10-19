import React from "react";
import "./VideoCreator.scss";

function VideoCreator({ creator }) {
  return (
    <div className="video-creator">
      <p className="video-creator__text">By {creator}</p>
    </div>
  );
}

export default VideoCreator;
