import React from "react";
import Button from "../Button/Button";
import uploadIcon from "../../assets/icons/upload.svg";
import "./UploadForm.scss";
import uploadPlaceholder from "../../assets/images/Upload_Preview.jpg";
import "../../styles/partials/_colours.scss";
import publishIcon from "../../assets/icons/publish.svg";

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

        <div className="uploadform__block--bothbottom">
          <div className="uploadform__block--middle">
            <label htmlFor="newCommentInput" className="uploadform__label">
              TITLE YOUR VIDEO
            </label>
            <textarea
              type="text"
              name="newUploadTitle"
              id="newUploadTitle"
              placeholder="Add a title to your video"
              className="uploadform__input uploadform__input--title "
            />
            <label htmlFor="newCommentInput" className="uploadform__label">
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

export default UploadForm;
