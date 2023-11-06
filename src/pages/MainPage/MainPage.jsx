import React from "react";
import Player from "../../components/Player/Player";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import fetchVideosList from "../../scripts/utils/fetch-videos-list";
import fetchVideosFromId from "../../scripts/utils/fetch-videos-detail";
import ActiveVideoDetail from "../../components/ActiveVideoDetail/ActiveVideoDetail";

import NextVideo from "../../components/NextVideos/NextVideo";
import BelowFold from "../../components/BelowFold/BelowFold";

function MainPage() {
  const { videoId } = useParams();
  const initialVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const activeVideoId = videoId ? videoId : initialVideoId;

  const [videosList, setVideosList] = useState(null);
  const [activeVideoObject, setActiveVideoObject] = useState(null);

  // get the list of videos

  const getAndSetVideosList = async () => {
    const list = await fetchVideosList();
    setVideosList(list);
  };

  useEffect(() => {
    getAndSetVideosList();
  }, []);

  // get detail on a specific video
  const getAndSetVideoObject = async (id) => {
    const object = await fetchVideosFromId(id);
    setActiveVideoObject(object);
  };

  useEffect(() => {
    getAndSetVideoObject(activeVideoId);
  }, [activeVideoId]);

  //conditionally render JSX when all data is available

  if (videosList && activeVideoObject) {
    return (
      <>
        <main>
          <section>
            <Player activeVideoObject={activeVideoObject} />
          </section>
          <section>
            <BelowFold
              activeVideoId={activeVideoId}
              activeVideoObject={activeVideoObject}
              videosList={videosList}
            />
          </section>
        </main>
      </>
    );
  }

  return <Loading title={"Loading..."} />;
}

export default MainPage;
