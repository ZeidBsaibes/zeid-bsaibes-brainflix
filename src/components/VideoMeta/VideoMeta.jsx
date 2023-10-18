import React from "react";
import VideoTitle from "../VideoTitle/VideoTitle";
import VideoCreator from "../VideoCreator/VideoCreator";
import VideoDate from "../VideoDate/VideoDate";
import VideoViews from "../VideoViews/VideoViews";
import VideoLikes from "../VideoLikes/VideoLikes";

function VideoMeta() {
  return (
    <div>
      <VideoTitle />
      <VideoCreator />
      <VideoDate />
      <VideoViews />
      <VideoLikes />
    </div>
  );
}

export default VideoMeta;
