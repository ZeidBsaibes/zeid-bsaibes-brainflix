import React from "react";
import "./VideoThumbnail.scss";

function VideoThumbnail({ imageSrc, title, channel, id, updateActiveVideo }) {
  return (
    <div className="videothumbnail">
      <button
        className="videothumbnail__button"
        onClick={() => {
          updateActiveVideo(id);
        }}
      >
        <div className="videothumbnail__left">
          <img
            src={imageSrc}
            alt={`a video cover for a video entitled ${title}`}
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
