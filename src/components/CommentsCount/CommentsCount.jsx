import React from "react";
import "./CommentsCount.scss";

function CommentsCount({ activeVideoComments }) {
  return (
    <div className="comments-count">
      <p className="comments-count__text">
        {activeVideoComments.length} Comments
      </p>
    </div>
  );
}

export default CommentsCount;
