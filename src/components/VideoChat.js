import React, { useState, useEffect } from "react";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
  const [username, setUsername] = useState(localStorage.getItem("name")||"Peter");
  const [roomName, setRoomName] = useState("ProgBasics");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const inter = setInterval(() => {
      let valll = localStorage.getItem("roomba");
      if (valll) {
        handleSubmit();
      }
    }, 500);

    return () => {
      clearInterval(inter);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSubmit = async () => {
    // event.preventDefault()  ??? Nem tudjuk kell-e
    const data = await fetch("/video/token", {
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
    localStorage.setItem("roomba", "");
  };
  let render="";
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  }
  return render;
};

export default VideoChat;
