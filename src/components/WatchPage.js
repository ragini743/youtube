import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import LIveChat from "./LIveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    <div className="flex flex-col w-full md:flex-row md:justify-evenly">
      <div className="w-full h-[300px] md:w-[60%] md:h-full">
        <iframe
          className="w-full rounded-2xl h-full"
          title="youtube player"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          allow="accelerometer;autoplay;clipboard-write; encrypted-media;gyroscope;picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="border-2 border-black mt-8 md:mt-0">
        <LIveChat />
      </div>
      
    </div>
  );
};
export default WatchPage;
