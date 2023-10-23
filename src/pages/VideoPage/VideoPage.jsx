import React from "react";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { videoId } = useParams();
  return (
    <>
      <h1>This is a placeholder for the video page</h1>
      <h2>The video id for this page is {videoId}</h2>
    </>
  );
}

export default VideoPage;
