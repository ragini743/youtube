import React from "react";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-sm p-2">
      <div className="w-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user-logo"
        ></img>
      </div>
      <div>
        <h1 className="inline-block px-4">{name}</h1>
        <span>{message}</span>
      </div>
    </div>
  );
};
export default ChatMessage;
