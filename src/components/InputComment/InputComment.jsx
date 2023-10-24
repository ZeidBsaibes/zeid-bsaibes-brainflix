import React from "react";
import "./InputComment.scss";
import { useState } from "react";

function InputComment({ handleCommentInput }) {
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
