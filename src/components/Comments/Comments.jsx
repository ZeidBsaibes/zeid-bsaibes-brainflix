import React, { useEffect } from "react";
import CommentsCount from "../CommentsCount/CommentsCount";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentCard from "../CommentCard/CommentCard";
import { useState } from "react";
import fetchVideosFromId from "../../scripts/utils/fetch-videos-detail";

function Comments({
  activeVideoComments,
  activeVideoObject,
  refreshVideoObject,
}) {
  const [comments, setComments] = useState(activeVideoComments);

  // console.log(`from comments`, activeVideoObject);

  useEffect(() => {
    setComments(activeVideoComments);
  }, [activeVideoComments]);

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
              videoId={activeVideoObject.id}
              author={comment.name}
              comment={comment.comment}
              date={comment.timestamp}
              key={comment.id}
              id={comment.id}
              setComments={setComments}
            />
          );
        })}
    </div>
  );
}

export default Comments;
