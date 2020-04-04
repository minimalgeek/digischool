import React from "react";
import { School } from "../school/School";
import WhiteBoard from "./WhiteBoard";

export default class SchoolWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWhiteBoardOpen: false,
      userName: "Jozsef",
    };

    this.interval = setInterval(() => {
      let whiteBoard = window.localStorage.getItem("openwhiteboard");

      if (whiteBoard == "true") {
        console.info("whiteboard activate");
        this.setState({
          isWhiteBoardOpen: true,
        });
        clearInterval(this.interval);
      }
    }, 500);
  }

  toggleWhiteBoard = () => {
    const { isWhiteBoardOpen } = this.state;
    this.setState({
      isWhiteBoardOpen: isWhiteBoardOpen ? false : true,
    });
  };

  // Username will be extracted from user object.
  render() {
    const { isWhiteBoardOpen, userName } = this.state;
    return isWhiteBoardOpen ? (
      <WhiteBoard
        toggleWhiteBoard={this.toggleWhiteBoard}
        userName={userName}
      />
    ) : (
      <School toggleWhiteBoard={this.toggleWhiteBoard} />
    );
  }
}
