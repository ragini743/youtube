import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants" ;
import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";
import { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
    // setVideos(fakeData.items);
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    console.log("json",json);
    setVideos(json.items);
   
  };

  if (videos.length === 0) {
    return <div>Loading....</div>;
  }

  console.log("hey", videos);

  return (
    <div className="flex flex-wrap flex-col md:grid md:grid-cols-3 md:gap-8 2lg:gap-12">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link
          key={video.id}
          to={"/watch?v=" + video.id}
          className="my-6 md:my-2"
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
