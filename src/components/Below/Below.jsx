import React from "react";
import "./Below.scss";
import BelowLeft from "../BelowLeft/BelowLeft";
import BelowRight from "../BelowRight/BelowRight";

function Below({ activeVideoObject, videosList, activeVideoId }) {
  return (
    <div className="below">
      <BelowLeft activeVideoObject={activeVideoObject} />
      <BelowRight
        videosList={videosList}
        activeVideoId={activeVideoId}
        // videos={videos}
        // updateActiveVideo={updateActiveVideo}
        // activeVideoId={activeVideoId}
      />
    </div>
  );
}

export default Below;
