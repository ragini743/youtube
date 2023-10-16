import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import LIveChat from "./LIveChat";
import PlayListContainer from "./playListContainer";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const WatchPage = () => {
  const [liveChat, setLiveChat] = useState("false");
  const [playList, setPlayList] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getPlayList();
  }, []);

  const getPlayList = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log("playlist",json);
    setPlayList(json.items);
  };

  return (
    <div className="flex flex-col w-full md:col-span-10 md:flex-row md:p-5">
      <div className="w-full h-[360px] mb-10 md:w-[60%]  md:h-[500px] mr-10 relative ">
        <iframe
          className="w-full rounded-2xl h-full"
          title="youtube player"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          allow="accelerometer;autoplay;clipboard-write; encrypted-media;gyroscope;picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button
          className="bg-green-200 mt-5"
          onClick={() => {
            setLiveChat(!liveChat);
          }}
        >
          LIveChat
        </button>
      </div>
      {!liveChat ? (
        <div className="  border-2 border-black z-10 mt-8 md:mt-0 md:relative md:h-[500px]">
          <LIveChat />
        </div>
      ) : null}

      <div className="mt-10 flex flex-col w-full mx-auto items-center md:mr-5 md:ml-10 md:mt-0 md:w-[30%]">
        {playList.map((videoplay) => (
          <Link
            to={"/watch?v=" + videoplay.id}
            key={videoplay.id}
          >
            <PlayListContainer key={videoplay.id} videoplay={videoplay} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default WatchPage;
