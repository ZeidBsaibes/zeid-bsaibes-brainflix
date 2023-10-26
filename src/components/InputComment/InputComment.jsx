import React from "react";
import "./InputComment.scss";
import Button from "../Button/Button";
import commentIcon from "../../assets/icons/add_comment.svg";
import { useState } from "react";
import PostComment from "../../scripts/utils/post-comment";
import fetchVideosFromId from "../../scripts/utils/fetch-videos-detail";

function InputComment({ setComments, videoId }) {
  const [newComment, setNewComment] = useState("");
  const [formClass, setFormClass] = useState("inputcomment__input");

  const commentCheck = (newComment) => {
    if (newComment === "") {
      setFormClass(`inputcomment__input inputcomment__input--error`);
      return false;
    } else return true;
  };

  const handleSubmitClick = async (event) => {
    event.preventDefault();

    if (commentCheck(newComment)) {
      try {
        const postBody = { name: "Zeid", comment: newComment };
        const response = await PostComment(videoId, postBody);

        setNewComment("");
        const updatedVideoObject = await fetchVideosFromId(videoId);

        setComments(updatedVideoObject.comments);
      } catch (error) {
        console.error(error);
      }
    } else {
    }
  };

  const handleCommentInput = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
  };

  return (
    <div className="inputcomment">
      <form
        action=""
        onSubmit={handleSubmitClick}
        className="inputcomment__form"
      >
        <label htmlFor="newCommentInput" className="inputcomment__label">
          JOIN THE CONVERSATION
        </label>

        <textarea
          type="text"
          value={newComment}
          name="newCommentInput"
          id="newCommentInput"
          className={formClass}
          placeholder="Add a new comment"
          onChange={(event) => handleCommentInput(event)}
        />

        <Button text="COMMENT" icon={commentIcon} />
      </form>
    </div>
  );
}

export default InputComment;
