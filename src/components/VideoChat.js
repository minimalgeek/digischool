import React, { useState } from "react";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetch("http://localhost:3001/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: username,
        room: roomName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    setToken(json.token);
  };

  const handleLogout = (event) => {
    setToken(null);
  };
  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;
