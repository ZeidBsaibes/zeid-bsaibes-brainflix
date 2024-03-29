import React from "react";
import "./NextVideo.scss";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import { Link } from "react-router-dom";

function NextVideo({ videosList, updateActiveVideo, activeVideoId }) {
  const videosExcludingActive = videosList.filter((video) => {
    return video.id !== activeVideoId;
  });
  return (
    <article className="below-right">
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
    </article>
  );
}

export default NextVideo;
