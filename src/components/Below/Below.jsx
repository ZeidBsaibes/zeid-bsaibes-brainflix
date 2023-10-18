import React from "react";
import "./Below.scss";
import BelowLeft from "../BelowLeft/BelowLeft";
import BelowRight from "../BelowRight/BelowRight";
import { act } from "react-dom/test-utils";

function Below({
  videos,
  updateActiveVideo,
  activeVideoObject,
  activeVideoId,
}) {
  return (
    <div className="below">
      <BelowLeft activeVideoObject={activeVideoObject} />
      <BelowRight
        videos={videos}
        updateActiveVideo={updateActiveVideo}
        activeVideoId={activeVideoId}
      />
    </div>
  );
}

export default Below;
