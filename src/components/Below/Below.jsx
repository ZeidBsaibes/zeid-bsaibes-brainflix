import React from "react";
import "./Below.scss";
import BelowLeft from "../BelowLeft/BelowLeft";
import BelowRight from "../BelowRight/BelowRight";

function Below({
  activeVideoObject,
  videosList,
  activeVideoId,
  refreshVideoObject,
}) {
  return (
    <div className="below">
      <BelowLeft
        activeVideoObject={activeVideoObject}
        refreshVideoObject={refreshVideoObject}
      />
      <BelowRight videosList={videosList} activeVideoId={activeVideoId} />
    </div>
  );
}

export default Below;
