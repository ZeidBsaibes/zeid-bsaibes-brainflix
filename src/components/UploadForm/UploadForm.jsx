import React from "react";
import Button from "../Button/Button";
import uploadIcon from "../../assets/icons/upload.svg";
import "./UploadForm.scss";
import uploadPlaceholder from "../../assets/images/Upload_Preview.jpg";
import "../../styles/partials/_colours.scss";

function UploadForm() {
  return (
    <div className="uploadform">
      <form action="" className="uploadform__form">
        <div className="uploadform__block--top">
          <h2 className="uploadform__label">VIDEO THUMBNAIL</h2>
          <img
            className="uploadform__placeholder"
            src={uploadPlaceholder}
            alt="placeholder for upload thumbnail"
          />
        </div>

        <div className="uploadform__block--bottom">
          <label htmlFor="newCommentInput" className="uploadform__label">
            TITLE YOUR VIDEO
          </label>
          <textarea
            type="text"
            name="newUploadTitle"
            id="newUploadTitle"
            placeholder="Add a title to your video"
            className="uploadform__input"
          />
          <label htmlFor="newCommentInput" className="uploadform__label">
            ADD VIDEO DESCRIPTION
          </label>
          <textarea
            type="text"
            name="newUploadDescription"
            id="newUploadDescription"
            placeholder="Add a description to your video"
            className="uploadform__input"
          />
        </div>

        <div className="uploadform__buttons">
          <Button
            text="PUBLISH"
            icon={uploadIcon}
            className="uploadform__publish-button"
          />
          <Button
            text="CANCEL"
            className="uploadform__cancel-button"
            bgColour={"#fff"}
            textColour={"#0095ff"}
          />
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
