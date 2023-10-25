import React from "react";
import "./InputComment.scss";

function InputComment({ handleCommentInput, commentValue }) {
  return (
    <div className="inputcomment">
      <form
        action="
     "
      >
        <label htmlFor="newCommentInput" className="inputcomment__label">
          JOIN THE CONVERSATION
        </label>
        <textarea
          type="text"
          value={commentValue}
          name="newCommentInput"
          id="newCommentInput"
          className="inputcomment__input"
          placeholder="Add a new comment"
          onChange={(event) => handleCommentInput(event)}
        />
      </form>
    </div>
  );
}

export default InputComment;
