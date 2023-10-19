import React from "react";
import "./VideoDate.scss";
import moment from "moment";

function VideoDate({ date }) {
  console.log(date);
  return (
    <div className="video-date">
      <p className="video-date__text">{moment(date).fromNow()}</p>
    </div>
  );
}

export default VideoDate;
