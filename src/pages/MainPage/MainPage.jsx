import React from "react";
import Player from "../../components/Player/Player";
import Below from "../../components/BelowFold/BelowFold";
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
            <Below
              activeVideoObject={activeVideoObject}
              videosList={videosList}
              activeVideoId={activeVideoId}
              refreshVideoObject={getAndSetVideoObject}
            />
          </section>
        </main>
      </>
    );
  }

  return <Loading title={"Loading..."} />;
}

export default MainPage;
