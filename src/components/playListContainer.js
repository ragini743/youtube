import React from "react";
const PlayListContainer = (props) => {
    const {videoplay} = props;
    const {snippet} = videoplay;
    
    
    const  {title,thumbnails} = snippet;
    console.log(snippet);
    return(
        <div className="mb-10">
            <h1>{title}</h1>
            <div className="">
                <img src={thumbnails.medium.url} alt="playlist video"></img></div>
        </div>
    )
}
export default PlayListContainer;