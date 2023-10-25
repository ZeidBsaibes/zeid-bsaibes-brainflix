import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import InputComment from "../InputComment/InputComment";
import commentIcon from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";
import { useState } from "react";
import PostComment from "../../scripts/utils/post-comment";
import fetchVideosFromId from "../../scripts/utils/fetch-videos-detail";

function CommentsForm({ videoId, setComments }) {
  const [newComment, setNewComment] = useState("");

  //capture comment text onChange event from InputComment.jsx

  const handleCommentInput = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
  };

  //capture button onClick event from Button.jsx
  const handleSubmitClick = async () => {
    console.log("button has been clicked ");
    const postBody = { name: "Zeid", comment: newComment };
    const response = await PostComment(videoId, postBody);

    setNewComment("");
    const updatedVideoObject = await fetchVideosFromId(videoId);

    setComments(updatedVideoObject.comments);

    console.log(response);
  };

  return (
    <div className="commentsform">
      <div className="commentsform__left">
        <Avatar image={avatarImage} />
      </div>
      <div className="commentsform__right">
        <div className="commentsform__input">
          <InputComment
            commentValue={newComment}
            handleCommentInput={handleCommentInput}
          />
        </div>
        <div className="commentsform__button">
          <Button
            text="COMMENT"
            icon={commentIcon}
            handleClick={handleSubmitClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CommentsForm;
