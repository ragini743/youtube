import React from "react";
;

const PlayListContainer = (props) => {
  
     
    const {videoplay} = props;
    const {snippet} = videoplay;

    const  {title,thumbnails} = snippet;
    // console.log('snipet', videoplay);
    return(
        <div className="mb-10 border-2 border-black flex-col flex justify-center w-full">
            <h1 className="text-center shadow-lg mb-2 text-bold p-2 break-words">{title}</h1>
            <div className="">
                <img src={thumbnails.medium.url} alt="playlist video" className="w-full"></img></div>
             
        </div>
    )
}
export default PlayListContainer;



