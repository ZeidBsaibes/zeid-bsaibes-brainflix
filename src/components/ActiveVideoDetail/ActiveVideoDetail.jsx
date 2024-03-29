import React from "react";
import VideoMeta from "../VideoMeta/VideoMeta";
import Comments from "../Comments/Comments";
import "./ActiveVideoDetail.scss";

function ActiveVideoDetail({ activeVideoObject, refreshVideoObject }) {
  return (
    <div className="below-left">
      <VideoMeta activeVideoObject={activeVideoObject} />
      <Comments
        activeVideoComments={activeVideoObject.comments}
        activeVideoObject={activeVideoObject}
        refreshVideoObject={refreshVideoObject}
      />
    </div>
  );
}

export default ActiveVideoDetail;
