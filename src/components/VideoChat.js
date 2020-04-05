import React, { useState, useEffect } from "react";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("name") || "Peter"
  );
  const [roomName, setRoomName] = useState("ProgBasics");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const inter = setInterval(() => {
      let valll = localStorage.getItem("roomba");
      if (valll == "true") {
        console.info("Try connect to video chat room.");
        handleSubmit();
        clearInterval(inter);
      }
    }, 500);
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault()  ??? Nem tudjuk kell-e
    fetch("/video/token", {
      method: "POST",
      body: JSON.stringify({
        identity: username,
        room: roomName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((tokenString) => setToken(tokenString.token))
      .catch((error) => {
        setToken(null);
        console.info("Video chat not available.");
        console.error(error);
      });
  };

  const handleLogout = (event) => {
    setToken(null);
    localStorage.setItem("roomba", "");
  };
  let render = <div style={{minWidth: "451px"}}></div>;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  }
  return render;
};

export default VideoChat;
