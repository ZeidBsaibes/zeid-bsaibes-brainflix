import React from "react";
import VideoTitle from "../VideoTitle/VideoTitle";
import VideoCreator from "../VideoCreator/VideoCreator";
import VideoDate from "../VideoDate/VideoDate";
import VideoViews from "../VideoViews/VideoViews";
import VideoLikes from "../VideoLikes/VideoLikes";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./VideoMeta.scss";

function VideoMeta({ activeVideoObject }) {
  return (
    <div className="video-meta">
      <VideoTitle title={activeVideoObject.title} />
      <div className="video-meta__creator-date">
        <VideoCreator creator={activeVideoObject.channel} />
        <VideoDate date={activeVideoObject.timestamp} />
      </div>
      <div className="video-meta__views-likes">
        <VideoViews views={activeVideoObject.views} />
        <VideoLikes likes={activeVideoObject.likes} />
      </div>
      <VideoDescription description={activeVideoObject.description} />
    </div>
  );
}

export default VideoMeta;
