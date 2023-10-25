import React from "react";
import CommentsCount from "../CommentsCount/CommentsCount";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentCard from "../CommentCard/CommentCard";
import { useState } from "react";

function Comments({
  activeVideoComments,
  activeVideoObject,
  refreshVideoObject,
}) {
  const [comments, setComments] = useState(activeVideoComments);

  console.log(`from comments`, comments);
  return (
    <div>
      <CommentsCount comments={comments} />
      <CommentsForm
        videoId={activeVideoObject.id}
        refreshVideoObject={refreshVideoObject}
        setComments={setComments}
      />
      {comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => {
          return (
            <CommentCard
              author={comment.name}
              comment={comment.comment}
              date={comment.timestamp}
              key={comment.id}
              id={comment.id}
            />
          );
        })}
    </div>
  );
}

export default Comments;
