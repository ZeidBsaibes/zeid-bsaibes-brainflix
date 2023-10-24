import React from "react";
import "./BelowRight.scss";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import { Link } from "react-router-dom";

function BelowRight({ videosList, updateActiveVideo, activeVideoId }) {
  const videosExcludingActive = videosList.filter((video) => {
    return video.id !== activeVideoId;
  });
  return (
    <div className="below-right">
      <h3 className="below-right__title">NEXT VIDEOS</h3>
      {videosExcludingActive.map((video) => {
        return (
          <Link
            to={`/videos/${video.id}`}
            key={video.id}
            className="below-right__link"
          >
            <VideoThumbnail
              id={video.id}
              imageSrc={video.image}
              title={video.title}
              channel={video.channel}
              updateActiveVideo={updateActiveVideo}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default BelowRight;
