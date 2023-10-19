import "./App.scss";
import Below from "./components/Below/Below";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import { videoDetails } from "./assets/data/video-details";
import { useState } from "react";

function App() {
  const initialVideoId = videoDetails[0].id;
  const initialVideoObject = videoDetails[0];

  const [videos, setVideos] = useState(videoDetails);
  const [activeVideoId, setActiveVideoId] = useState(initialVideoId);
  const [activeVideoObject, setActiveVideoObject] =
    useState(initialVideoObject);

  const findActiveVideoObject = (id) => {
    const newActiveVideo = videos.filter((video) => {
      return video.id === id;
    });

    return newActiveVideo;
  };
  const updateActiveVideo = (id) => {
    setActiveVideoId(id);

    setActiveVideoObject(findActiveVideoObject(id)[0]);
  };

  console.log(activeVideoId);

  return (
    <>
      <Header />
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

export default App;
