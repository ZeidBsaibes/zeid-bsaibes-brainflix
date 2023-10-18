import React from "react";
import Avatar from "../Avatar/Avatar";

function CommentCard({ author, date, comment }) {
  return (
    <div>
      <Avatar />
      <h3>{author}</h3>
      <p>{comment}</p>
      <p>{date}</p>
    </div>
  );
}

export default CommentCard;
