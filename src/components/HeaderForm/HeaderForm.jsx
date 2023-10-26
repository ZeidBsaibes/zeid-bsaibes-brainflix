import React from "react";
import "./HeaderForm.scss";
import Avatar from "../Avatar/Avatar";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import AvatarImage from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function HeaderForm() {
  const image = AvatarImage;
  return (
    <div className="header-form">
      <div className="header-form__top">
        <FormInput />
        <div className="header-form__mobile-avatar">
          <Avatar image={image} />
        </div>
      </div>
      <div className="header-form__button">
        <Link to={"/upload"}>
          <Button text="UPLOAD" icon={uploadIcon} link={"/upload"} />
        </Link>
      </div>
      <div className="header-form__desktop-avatar">
        <Avatar image={image} />
      </div>
    </div>
  );
}

export default HeaderForm;
