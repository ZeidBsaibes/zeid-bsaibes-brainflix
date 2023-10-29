import React from "react";
import "./VideoThumbnail.scss";

function VideoThumbnail({ imageSrc, title, channel, id }) {
  return (
    <div className="videothumbnail">
      <button
        className="videothumbnail__button"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <div className="videothumbnail__left">
          <img
            src={imageSrc}
            alt={`video thumbnail for a video entitled ${title}`}
            className="videothumbnail__image"
          />
        </div>

        <div className="videothumbnail__right">
          <h3 className="videothumbnail__title">{title}</h3>
          <p className="videothumbnail__creator">{channel}</p>
        </div>
      </button>
    </div>
  );
}

export default VideoThumbnail;
