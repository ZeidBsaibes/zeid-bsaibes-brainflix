import React from "react";
import CommentsCount from "../CommentsCount/CommentsCount";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentCard from "../CommentCard/CommentCard";

function Comments({ activeVideoComments }) {
  return (
    <div>
      <CommentsCount activeVideoComments={activeVideoComments} />
      <CommentsForm />
      {activeVideoComments.map((comment) => {
        return (
          <CommentCard
            author={comment.name}
            comment={comment.comment}
            date={comment.timestamp}
            key={comment.id}
          />
        );
      })}
    </div>
  );
}

export default Comments;
