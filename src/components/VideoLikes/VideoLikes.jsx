import React from "react";
import "./VideoLikes.scss";
import Icon from "../Icon/Icon";
import heart from "../../assets/icons/likes.svg";

function VideoLikes({ likes }) {
  return (
    <div className="video-likes">
      <Icon icon={heart} />
      <p className="video-likes__text">{likes}</p>
    </div>
  );
}

export default VideoLikes;
