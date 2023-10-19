import React from "react";
import "./Player.scss";

function Player({ activeVideoObject }) {
  return (
    <div className="player">
      <video
        controls
        className="player__screen"
        poster={activeVideoObject.image}
      ></video>
    </div>
  );
}

export default Player;
