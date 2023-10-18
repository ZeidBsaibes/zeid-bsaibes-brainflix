import React from "react";
import VideoTitle from "../VideoTitle/VideoTitle";
import VideoCreator from "../VideoCreator/VideoCreator";
import VideoDate from "../VideoDate/VideoDate";
import VideoViews from "../VideoViews/VideoViews";
import VideoLikes from "../VideoLikes/VideoLikes";
import VideoDescription from "../VideoDescription/VideoDescription";

function VideoMeta({ activeVideoObject }) {
  return (
    <div>
      <VideoTitle title={activeVideoObject.title} />
      <VideoCreator creator={activeVideoObject.channel} />
      <VideoDate date={activeVideoObject.timestamp} />
      <VideoViews views={activeVideoObject.views} />
      <VideoLikes likes={activeVideoObject.likes} />
      <VideoDescription description={activeVideoObject.description} />
    </div>
  );
}

export default VideoMeta;
