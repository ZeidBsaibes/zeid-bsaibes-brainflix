import React from "react";
import Header from "../../components/Header/Header";
import Player from "../../components/Player/Player";
import Below from "../../components/Below/Below";

function HomePage({
  activeVideoObject,
  videos,
  updateActiveVideo,
  activeVideoId,
}) {
  return (
    <>
      <Player activeVideoObject={activeVideoObject} />
      <Below
        videos={videos}
        updateActiveVideo={updateActiveVideo}
        activeVideoObject={activeVideoObject}
        activeVideoId={activeVideoId}
      />
    </>
  );
}

export default HomePage;
