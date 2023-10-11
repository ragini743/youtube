import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PlayListContainer = (props) => {
  
     
    const {videoplay} = props;
    const {snippet} = videoplay;

    const  {title,thumbnails} = snippet;
    console.log('snipet', videoplay);
    return(
        <div className="mb-10 border-2 border-black flex-col flex justify-center w-full">
            <h1 className="text-center shadow-lg mb-2 text-bold p-2 break-words">{title}</h1>
            <div className="">
                <img src={thumbnails.medium.url} alt="playlist video" className="w-full"></img></div>
             
        </div>
    )
}
export default PlayListContainer;




// <iframe width="873" height="491" src="https://www.youtube.com/embed/psOf2GzSRbs?list=PLbpi6ZahtOH5rgGn0kqb5Ig9rF5u2SsjU" title="Which KPOP star is @LARRAY obsessed with? | YouTube Watch History" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>