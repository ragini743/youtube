import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
const WatchPage = () =>{
const [searchParams] = useSearchParams();
console.log(searchParams.get("v"))

    const dispatch = useDispatch() ;
    useEffect(() => {
        dispatch( closeMenu())
    },[])
    return(
        <div className="py-16 px-24 w-[1000px] h-[550px]">
        <iframe className="w-full rounded-2xl h-full"title="youtube player"
        src ={"https://www.youtube.com/embed/"+searchParams.get("v")} allow="accelerometer;autoplay;clipboard-write; encrypted-media;gyroscope;picture-in-picture; web-share" allowFullScreen></iframe>
        
        </div>
    )
}
export default WatchPage;