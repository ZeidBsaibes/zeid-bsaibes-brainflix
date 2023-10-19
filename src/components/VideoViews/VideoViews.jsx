import React from "react";
import "./VideoViews.scss";
import Icon from "../Icon/Icon";
import view from "../../assets/icons/views.svg";

function VideoViews({ views }) {
  return (
    <div className="video-views">
      <Icon icon={view} />
      <p className="video-views__text">{views}</p>
    </div>
  );
}

export default VideoViews;
