import React from "react";
import "./InputComment.scss";

function InputComment() {
  return (
    <div className="inputcomment">
      <form
        action="
     "
      >
        <label htmlFor="newCommentInput">JOIN THE CONVERSATION</label>
        <input
          type="text"
          name="newCommentInput"
          id="newCommentInput"
          className="inputcomment__input"
          placeholder="Add a new comment"
        />
      </form>
    </div>
  );
}

export default InputComment;
