import React from "react";
import "./CommentsCount.scss";

function CommentsCount({ comments }) {
  return (
    <div className="comments-count">
      <p className="comments-count__text">{comments.length} Comments</p>
    </div>
  );
}

export default CommentsCount;
