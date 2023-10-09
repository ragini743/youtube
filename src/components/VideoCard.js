import React from "react";

const VideoCard = ({ info }) => {
    // console.log("info",info) ;
    const { snippet, statistics } = info ;
    // console.log("snippet",snippet)
    // console.log("statistics",statistics)
    const {channelTitle, title, thumbnails} = snippet ;
    return(
        <div className="shadow-md h-full">
            <div>
            <img className="rounded-2xl w-full" src = {thumbnails.high.url} alt="thumbnails"></img>
            </div>
            <ul>
                <li className="overflow-x-hidden">title : {title}</li>
                <li>{channelTitle}</li>
                
                <li className=""> {statistics.viewCount} views</li>
            
            </ul>
        </div>
    )
}

export default VideoCard;

export const AdVideoCard = ({info}) =>{
    console.log("info",info)
    return(
        <div className="border-2 border-red-700 my-6 md:my-2">
            {/* <h1>{info.snippet.title}</h1> */}
        <VideoCard info={info}/>
        </div>
    )
};
