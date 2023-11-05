import React from "react";
import Button from "../Button/Button";
import "./UploadForm.scss";
import "../../styles/partials/_colours.scss";
import publishIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import postVideo from "../../scripts/utils/post-video";

function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const [vidTitle, setVidTitle] = useState("");
  const [vidDescription, setVidDescription] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const handleInput = (event) => {
    if (event.target.id === "newtitle") {
      setVidTitle(event.target.value);
    } else if (event.target.id === "newdesc") {
      setVidDescription(event.target.value);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setFormErrors([]);

    if (!vidTitle) {
      setFormErrors((prev) => [...prev, "You must add a video title"]);
    }

    if (!vidDescription) {
      setFormErrors((prev) => [...prev, "You must add a video description"]);
    }

    if (!file) {
      setFormErrors((prev) => [...prev, "You must upload an image"]);
    }

    if (vidTitle && vidDescription) {
      const formData = new FormData();

      formData.append("title", vidTitle);
      formData.append("description", vidDescription);
      formData.append("channel", "Zeid's Channel");
      formData.append(
        "image",
        "http://localhost:8080/public/images/mountains.jpg"
      );
      formData.append("views", 0);
      formData.append("likes", 0);
      formData.append("duration", Math.floor(Math.random() * 100) + 1);
      formData.append("video", "https://project-2-api.herokuapp.com/stream");
      formData.append("comments", []);

      formData.append("file", file);

      try {
        const response = await postVideo(formData);
        console.log(response);
        setVidTitle("");
        setVidDescription("");
        uploadSuccess();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleAddFile = async (event) => {
    setFile(event.target.files[0]);
    updatePreviewThumbnail(event);
  };

  const updatePreviewThumbnail = async (event) => {
    const preview = event.target.files[0];
    if (preview) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(preview);
    }
  };

  const uploadSuccess = () => {
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
        <form
          action="/videos"
          method="post"
          encType="multipart/form-data"
          className="uploadform__form"
        >
          <div className="uploadform__block--top">
            <h2 className="uploadform__label">VIDEO THUMBNAIL</h2>
            <img
              className="uploadform__placeholder"
              src={
                previewUrl
                  ? previewUrl
                  : `http://localhost:8080/public/images/placeholder_upload_page.jpeg`
              }
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
                id="newtitle"
                placeholder="Add a title to your video"
                className="uploadform__input uploadform__input--title"
                onInput={(event) => {
                  handleInput(event);
                }}
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
                id="newdesc"
                placeholder="Add a description to your video"
                className="uploadform__input uploadform__input--description"
                onInput={(event) => {
                  handleInput(event);
                }}
              />
              <label
                htmlFor="newUploadDescription"
                className="uploadform__label"
              >
                ADD VIDEO POSTER
              </label>
              <input
                type="file"
                accept="image/*"
                filename={file}
                name="uploaded_file"
                onChange={(event) => handleAddFile(event)}
              />
            </div>

            <div className="uploadform__block--bottom">
              <div className="uploadform__buttons">
                <div className="uploadform__button--publish">
                  <Button
                    text="PUBLISH"
                    icon={publishIcon}
                    className="uploadform__button--publish"
                    handleClick={handleClick}
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
        <div>
          {formErrors
            ? formErrors.map((error) => (
                <div className="uploadform__errors">{error}</div>
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default UploadForm;
