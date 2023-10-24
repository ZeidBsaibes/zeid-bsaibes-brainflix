import React from "react";
import Player from "../../components/Player/Player";
import Below from "../../components/Below/Below";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import fetchVideosList from "../../scripts/utils/fetch-videos-list";
import fetchVideosFromId from "../../scripts/utils/fetch-videos-detail";

function MainPage() {
  const { videoId } = useParams();
  const initialVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const activeVideoId = videoId ? videoId : initialVideoId;

  const [videosList, setVideosList] = useState(null);
  const [activeVideoObject, setActiveVideoObject] = useState(null);

  // get the list of videos

  useEffect(() => {
    const getAndSetVideosList = async () => {
      const list = await fetchVideosList();
      setVideosList(list);
    };
    getAndSetVideosList();
  }, []);

  // get detail on a specific video
  useEffect(() => {
    const getAndSetVideoObject = async (id) => {
      const object = await fetchVideosFromId(id);
      setActiveVideoObject(object);
    };
    getAndSetVideoObject(activeVideoId);
  }, [activeVideoId]);

  //conditionally render JSX when all data is available
  console.log("is this true", activeVideoId && videosList);

  if (videosList && activeVideoObject) {
    console.log("current video id:", activeVideoObject.id);
    return (
      <>
        <Player activeVideoObject={activeVideoObject} />
        <Below
          activeVideoObject={activeVideoObject}
          videosList={videosList}
          activeVideoId={activeVideoId}
        />
      </>
    );
  }

  return <Loading />;
}

export default MainPage;
