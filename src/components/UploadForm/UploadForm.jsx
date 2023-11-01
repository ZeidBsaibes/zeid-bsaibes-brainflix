import React from "react";
import Button from "../Button/Button";
import "./UploadForm.scss";

import "../../styles/partials/_colours.scss";
import publishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";

import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    setIsUploading(!isUploading);
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  };

  if (isUploading) {
    return (
      <Loading
        title={"Please wait, you will be redirected after upload is complete"}
      />
    );
  }

  if (!isUploading) {
    return (
      <div className="uploadform">
        <form action="" className="uploadform__form">
          <div className="uploadform__block--top">
            <h2 className="uploadform__label">VIDEO THUMBNAIL</h2>
            <img
              className="uploadform__placeholder"
              src="http://localhost:8080/public/images/plane.jpg"
              alt="placeholder for upload thumbnail"
            />
          </div>

          <div className="uploadform__block--bothbottom">
            <div className="uploadform__block--middle">
              <label htmlFor="newUploadTitle" className="uploadform__label">
                TITLE YOUR VIDEO
              </label>
              <textarea
                type="text"
                name="newUploadTitle"
                id="newUploadTitle"
                placeholder="Add a title to your video"
                className="uploadform__input uploadform__input--title "
              />
              <label
                htmlFor="newUploadDescription"
                className="uploadform__label"
              >
                ADD VIDEO DESCRIPTION
              </label>
              <textarea
                type="text"
                name="newUploadDescription"
                id="newUploadDescription"
                placeholder="Add a description to your video"
                className="uploadform__input uploadform__input--description"
              />
            </div>
            <div className="uploadform__block--bottom">
              <div className="uploadform__buttons">
                <div className="uploadform__button--publish">
                  <Button
                    text="PUBLISH"
                    icon={publishIcon}
                    className="uploadform__button--publish"
                    handleClick={(event) => {
                      handleClick(event);
                    }}
                  />
                </div>
                <div className="uploadform__button--cancel">
                  <Button
                    text="CANCEL"
                    bgColour={"#fff"}
                    textColour={"#0095ff"}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UploadForm;
