import React from "react";
import Avatar from "../Avatar/Avatar";

import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import InputComment from "../InputComment/InputComment";

import "./CommentsForm.scss";

function CommentsForm({ videoId, setComments }) {
  //capture comment text onChange event from InputComment.jsx

  //capture button onClick event from Button.jsx

  return (
    <div className="commentsform">
      <div className="commentsform__left">
        <Avatar image={avatarImage} />
      </div>
      <div className="commentsform__right">
        <div className="commentsform__input">
          <InputComment setComments={setComments} videoId={videoId} />
        </div>
        <div className="commentsform__button"></div>
      </div>
    </div>
  );
}

export default CommentsForm;
