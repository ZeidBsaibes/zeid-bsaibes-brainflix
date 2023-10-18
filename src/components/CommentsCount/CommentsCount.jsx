import React from "react";

function CommentsCount({ activeVideoComments }) {
  return (
    <div>
      <p>{activeVideoComments.length} Comments</p>
    </div>
  );
}

export default CommentsCount;
