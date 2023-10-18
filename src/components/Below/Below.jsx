import React from "react";
import "./Below.scss";
import BelowLeft from "../BelowLeft/BelowLeft";
import BelowRight from "../BelowRight/BelowRight";

function Below() {
  return (
    <div className="below">
      <BelowLeft />
      <BelowRight />
    </div>
  );
}

export default Below;
