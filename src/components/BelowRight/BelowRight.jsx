import React from "react";
import "./BelowRight.scss";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

function BelowRight({ videos, updateActiveVideo, activeVideoId }) {
  const videosExcludingActive = videos.filter((video) => {
    return video.id !== activeVideoId;
  });
  return (
    <div className="below-right">
      <h3 className="below-right__title">NEXT VIDEOS</h3>
      {videosExcludingActive.map((video) => {
        return (
          <VideoThumbnail
            key={video.id}
            id={video.id}
            imageSrc={video.image}
            title={video.title}
            channel={video.channel}
            updateActiveVideo={updateActiveVideo}
          />
        );
      })}
    </div>
  );
}

export default BelowRight;
