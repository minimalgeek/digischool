import React from "react";
import "./App.css";
import VideoChat from "./components/VideoChat";
import { BrowserRouter, Route } from "react-router-dom";
import SchoolWrapper from "./components/SchoolWrapper";

const App = () => {
  localStorage.setItem("roomba", false);
  localStorage.setItem("openwhiteboard", false);
  return (
    <div className="app">
      <header>
        <h1>My Digital School</h1>
      </header>
      <main>
        <VideoChat />
        <SchoolWrapper />
        {/* <BrowserRouter>
          <Route component={SchoolWrapper} to="/" />
          <Route component={VideoChat} to="/video" />
        </BrowserRouter> */}
      </main>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="React">
            ⚛
          </span>{" "}
          by <a href="https://codecool.com/hu/">Codecool</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
