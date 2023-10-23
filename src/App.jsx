import "./App.scss";
import Below from "./components/Below/Below";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import { videoDetails } from "./assets/data/video-details";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fetchVideos from "./scripts/utils/fetch-videos";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [videos, setVideos] = useState(videoDetails);
  const initialVideoId = videoDetails[0].id;
  const initialVideoObject = videoDetails[0];

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                activeVideoObject={activeVideoObject}
                videos={videos}
                updateActiveVideo={updateActiveVideo}
                activeVideoId={activeVideoId}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
