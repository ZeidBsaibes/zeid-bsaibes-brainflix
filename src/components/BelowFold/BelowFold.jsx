import React from "react";
import "./BelowFold.scss";
import ActiveVideoDetail from "../ActiveVideoDetail/ActiveVideoDetail";
import BelowRight from "../NextVideos/NextVideo";

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
      <BelowRight videosList={videosList} activeVideoId={activeVideoId} />
    </div>
  );
}

export default BelowFold;
