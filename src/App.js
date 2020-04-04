import React from "react";
import "./App.css";
import VideoChat from "./components/VideoChat";
import { BrowserRouter, Route } from "react-router-dom";
import { School } from "./school/School";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>My Digital School</h1>
      </header>
      <main>
        <BrowserRouter>
          <Route component={School} to="/" />
          <Route component={VideoChat} to="/video" />
        </BrowserRouter>
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
