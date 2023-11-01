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
      setFormErrors((prev) => [...prev, "You Must Add a video title"]);
    }

    if (!vidDescription) {
      setFormErrors((prev) => [...prev, "You Must add a video description"]);
    }

    if (vidTitle && vidDescription) {
      const newVideo = {
        title: vidTitle,
        description: vidDescription,
        channel: "Zeid's Channel",
        image: "http://localhost:8080/public/images/mountains.jpg",
        views: "0",
        likes: "0",
        duration: Math.floor(Math.random() * 100) + 1,
        video: "https://project-2-api.herokuapp.com/stream",
        comments: [],
      };
      try {
        const response = await postVideo(newVideo);
        console.log(response);
        setVidTitle("");
        setVidDescription("");
        uploadSuccess();
      } catch (error) {
        console.error(error);
      }
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
                rows="10"
                name="newUploadDescription"
                id="newdesc"
                placeholder="Add a description to your video"
                className="uploadform__input uploadform__input--description"
                onInput={(event) => {
                  handleInput(event);
                }}
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
