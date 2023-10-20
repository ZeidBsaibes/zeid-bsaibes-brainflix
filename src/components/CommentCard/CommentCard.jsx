import React from "react";
import Avatar from "../Avatar/Avatar";
import "./CommentCard.scss";
import moment from "moment";

function CommentCard({ author, date, comment }) {
  return (
    <div className="commentcard">
      <div className="commentcard__left">
        <Avatar />
      </div>

      <div className="commentcard__right">
        <div className="commentcard__right--top">
          <h3 className="commentcard__author">{author}</h3>
          <p className="commentcard__date">{moment(date).fromNow()}</p>
        </div>
        <div className="commentcard__right--bottom">
          <p className="commentcard__comment">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
