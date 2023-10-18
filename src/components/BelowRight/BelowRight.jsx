import React from "react";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

function BelowRight({ videos, updateActiveVideo }) {
  return (
    <div>
      <h3>Next Videos</h3>
      {videos.map((video) => {
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
