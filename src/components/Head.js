import React, { useEffect, useState } from "react";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import searchSlice, { cacheResults } from "../utils/searchSlice";
import { json } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion,setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) =>store.search);

  console.log("searchQuery", searchQuery);
  useEffect(() => {
    //make an API call in each key strokes
    // make an API call after every key press
    // but if the difference between 2 api calls is <200ms
    // >200ms decline the API call
    const timer = setTimeout(() =>{ 
        if(searchCache[searchQuery]){setSuggestion(searchCache[searchQuery]);
        }else{
        getSearchSuggestion()
    }
  } , 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // key -i
  // render the component
  // useEffect()
  // statrt timer => make an API call
  // key -ip
  // destroy the component (useEffect retturn method);
  // re-render the component
  // useEffect()
  // start timer => make API call  after 200ms

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("json", json[1]);
    setSuggestion(json[1]);
    // update cache
    Dispatch(
        cacheResults({
            [searchQuery]:json[1],
            })
    )
  };

  const Dispatch = useDispatch();

  const toggleMenuHandler = () => {
    Dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg py-8 px-4">
      <div className="w-9 col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSxDi-7pXCkkCO3daDIiKS_0602UEJQ5BfCruSiR7LQ&s"
          alt="menu"
          className="w-full cursor-pointer"
        ></img>
      </div>
      <div className="w-28 col-span-1 relative -left-14 p-0.5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNvE0BVKYsH-EceH_u2MBDgbiowadaNTTEA&usqp=CAU"
          alt="youtube-logo"
          className="w-full"
        ></img>
      </div>

      <div className="flex border-2 col-span-8 w-2/3 rounded-xl border-gray-400 justify-between mx-20 relative">
        <input
          type="text"
          className="w-full rounded-xl pt-2 pb-2 rounded-r-none pl-2  border-0 mr-4 "
          placeholder="search"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() =>setShowSuggestion(true)}
          onBlur={() =>setShowSuggestion(false)}
        ></input>
        <button type="search" className="w-9 px-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXvNI4E3PQ18LUBBYIpjyQUQUwhBTw3VQiBMYec8Omw&s"
            alt="search-icon"
          ></img>
        </button>
        {suggestion.length>0 && (
        <div
          className="absolute left-0 right-0 top-12 bg-white border-2 
        items-center rounded-lg"
        >
          <ul className="flex flex-col relative p-3">
            {suggestion.map((s)=> (
            <li
                key={s}
                className="shadow-sm p-2 hover:bg-gray-100 rounded-lg"
              >
                {s}
                {/* <img
                  src="https://www.freepnglogos.com/uploads/search-png/search-very-basic-icon-ios-iconset-icons-7.png"
                  alt="icon"
                  className="w-6 mr-4  inline-block"
                ></img> */}
              </li>
            ))}
            
          </ul>
        </div>
                 ) }


      </div>

      <div className="w-9 col-span-2 relative left-20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user-logo"
        ></img>
      </div>
    </div>
  );
};
export default Head;
