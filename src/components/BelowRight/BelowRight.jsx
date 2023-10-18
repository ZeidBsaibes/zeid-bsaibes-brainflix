import React from "react";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

function BelowRight({ videos, updateActiveVideo, activeVideoId }) {
  const videosExcludingActive = videos.filter((video) => {
    return video.id !== activeVideoId;
  });
  return (
    <div>
      <h3>Next Videos</h3>
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
