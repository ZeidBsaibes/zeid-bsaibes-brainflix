import React from "react";
import Player from "../../components/Player/Player";
import Below from "../../components/Below/Below";
import MainPage from "../MainPage/MainPage";

function HomePage({
  activeVideoObject,
  videos,
  updateActiveVideo,
  activeVideoId,
}) {
  return (
    <>
      <MainPage />
      {/* <Player activeVideoObject={activeVideoObject} />
      <Below
        videos={videos}
        updateActiveVideo={updateActiveVideo}
        activeVideoObject={activeVideoObject}
        activeVideoId={activeVideoId}
      /> */}
    </>
  );
}

export default HomePage;
