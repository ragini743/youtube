import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import LIveChat from "./LIveChat";

const WatchPage = () => {
  const [liveChat,setLiveChat] = useState("false")
  const [playList,setPlayList] =useState([])
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    <div className="flex flex-col w-full md:col-span-10 md:flex-row">
      <div className="w-[60%] mb-5 md:h-[500px]">
        <iframe
          className="w-full rounded-2xl h-full"
          title="youtube player"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          allow="accelerometer;autoplay;clipboard-write; encrypted-media;gyroscope;picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      <button className="bg-green-200 mt-5" onClick={()=>{setLiveChat(!liveChat)}}>LIveChat</button>
      </div>
    { !liveChat?(
      <div className="border-2 border-black z-10 mt-8 md:mt-0  h-[500px]">
        <LIveChat />
      </div>) :null
      }

      {/* <div>
        plyList
      </div> */}
      
    </div>
  );
};
export default WatchPage;
