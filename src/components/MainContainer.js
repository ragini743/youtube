import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import InputContainer from "./InputContainer";
const MainContainer = () => {
  return (
    <div className="md:col-span-10 md:overflow-y-scroll md:h-[100vh]">
      <ButtonList />
      <VideoContainer />
      {/* <InputContainer /> */}
    </div>
  );
};
export default MainContainer;
