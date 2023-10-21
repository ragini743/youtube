import React, { useEffect } from "react";
import { useState } from "react";
import { searchResultAPI, videoData } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SearchVideo from "./SearchVideo";
import Shimmer from "./Shimmer";

const InputContainer = () => {
  const [searchParams] = useSearchParams();
  console.log("searchParams",searchParams)
    const URL= searchParams.get("q") ;
    const [result,setResult]  = useState ([]);
    console.log("URL",URL);
 
    const getResult = async () =>{
        const resultData=await fetch(searchResultAPI+URL);
        const jsonResult = await resultData.json()
        console.log("jsonResult",jsonResult.items)
        // setResult(jsonResult.items)
        console.log("result",result)
        setResult(videoData)
      }
      useEffect(() =>{
        getResult();}
        ,[result]
      )
     
if(result.length===0){
  return <Shimmer />
}
return(
  
    <div className="flex flex-wrap flex-col md:grid md:grid-cols-3 p-4 md:gap-8 2lg:gap-12 md:h-[100vh] md:overflow-y-scroll">
      {result.map((r)=>(
        <Link to={"results?="+r.id} key={r.id}>
        <SearchVideo r={r} />
        </Link>
      ))}
    </div>
    
)
}
export default InputContainer ; 





