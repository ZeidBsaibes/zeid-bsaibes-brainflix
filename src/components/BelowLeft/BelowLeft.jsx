import React from "react";
import VideoMeta from "../VideoMeta/VideoMeta";
import Comments from "../Comments/Comments";

function BelowLeft({ activeVideoObject }) {
  return (
    <div className="below-left">
      BelowLeft
      <VideoMeta activeVideoObject={activeVideoObject} />
      <Comments activeVideoComments={activeVideoObject.comments} />
    </div>
  );
}

export default BelowLeft;
