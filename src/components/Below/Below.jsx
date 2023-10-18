import React from "react";
import "./Below.scss";
import BelowLeft from "../BelowLeft/BelowLeft";
import BelowRight from "../BelowRight/BelowRight";
import { act } from "react-dom/test-utils";

function Below({ videos, updateActiveVideo, activeVideoObject }) {
  return (
    <div className="below">
      <BelowLeft activeVideoObject={activeVideoObject} />
      <BelowRight videos={videos} updateActiveVideo={updateActiveVideo} />
    </div>
  );
}

export default Below;
