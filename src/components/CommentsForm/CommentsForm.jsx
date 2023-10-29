import React from "react";
import Avatar from "../Avatar/Avatar";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import InputComment from "../InputComment/InputComment";

import "./CommentsForm.scss";

function CommentsForm({ videoId, setComments }) {
  return (
    <div className="commentsform">
      <div className="commentsform__left">
        <Avatar image={avatarImage} />
      </div>
      <div className="commentsform__right">
        <div className="commentsform__input">
          <InputComment setComments={setComments} videoId={videoId} />
        </div>
      </div>
    </div>
  );
}

export default CommentsForm;
