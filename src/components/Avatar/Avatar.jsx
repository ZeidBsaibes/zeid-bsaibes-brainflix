import React from "react";
import "./Avatar.scss";
import avatarPlaceholder from "../../assets/images/Portrait_Placeholder.png";

function Avatar({ image }) {
  return (
    <div className="avatar">
      <img
        src={image ? image : avatarPlaceholder}
        alt="avatar  of some dude"
        className="avatar__image"
      />
    </div>
  );
}

export default Avatar;
