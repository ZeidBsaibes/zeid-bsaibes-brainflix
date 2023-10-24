import React from "react";
import VideoMeta from "../VideoMeta/VideoMeta";
import Comments from "../Comments/Comments";
import "./BelowLeft.scss";

function BelowLeft({ activeVideoObject }) {
  return (
    <div className="below-left">
      <VideoMeta activeVideoObject={activeVideoObject} />
      <Comments
        activeVideoComments={activeVideoObject.comments}
        activeVideoObject={activeVideoObject}
      />
    </div>
  );
}

export default BelowLeft;
