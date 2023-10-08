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
    <>
      <div className="my-12 mx-12 col-span-8 h-[550px]">
        <iframe
          className="w-full rounded-2xl h-full"
          title="youtube player"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          allow="accelerometer;autoplay;clipboard-write; encrypted-media;gyroscope;picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="my-12 border-2 col-span-4 mx-4 border-black p-4 rounded-lg h-[550px]m">
        <LIveChat />
      </div>
      
    </>
  );
};
export default WatchPage;
