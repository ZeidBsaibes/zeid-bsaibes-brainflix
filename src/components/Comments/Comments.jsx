import React from "react";
import CommentsCount from "../CommentsCount/CommentsCount";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentCard from "../CommentCard/CommentCard";

function Comments() {
  return (
    <div>
      <CommentsCount />
      <CommentsForm />
      <CommentCard />
    </div>
  );
}

export default Comments;
