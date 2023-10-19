import React from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import InputComment from "../InputComment/InputComment";
import commentIcon from "../../assets/icons/add_comment.svg";
import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <div className="commentsform">
      <div className="commentsform__left">
        <Avatar image={avatarImage} />
      </div>
      <div className="commentsform__right">
        <InputComment />
        <Button text="COMMENT" icon={commentIcon} />
      </div>
    </div>
  );
}

export default CommentsForm;
