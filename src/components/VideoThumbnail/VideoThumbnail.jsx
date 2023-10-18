import React from "react";
import "./VideoThumbnail.scss";

function VideoThumbnail({ imageSrc, title, channel, id, updateActiveVideo }) {
  return (
    <button
      onClick={() => {
        updateActiveVideo(id);
      }}
    >
      <div>
        <img
          src={imageSrc}
          alt={`a video cover for a video entitled ${title}`}
          className="videothumbnail__image"
        />
        <h3>{title}</h3>
        <p>{channel}</p>
        <p>{id}</p>
      </div>
    </button>
  );
}

export default VideoThumbnail;
