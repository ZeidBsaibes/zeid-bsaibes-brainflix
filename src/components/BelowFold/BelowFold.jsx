import React from "react";
import "./BelowFold.scss";
import ActiveVideoDetail from "../ActiveVideoDetail/ActiveVideoDetail";
import NextVideo from "../NextVideos/NextVideo";

function BelowFold({
  activeVideoObject,
  videosList,
  activeVideoId,
  refreshVideoObject,
}) {
  return (
    <div className="below">
      <ActiveVideoDetail
        activeVideoObject={activeVideoObject}
        refreshVideoObject={refreshVideoObject}
      />
      <NextVideo videosList={videosList} activeVideoId={activeVideoId} />
    </div>
  );
}

export default BelowFold;
