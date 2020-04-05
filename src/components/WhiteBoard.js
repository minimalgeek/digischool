import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import ColorSelector from "./ColorSelector.js";
import UserList from "./UserList";

// In development you have to point the react front end explicitly to your express server which will be running on a different port than the React Dev Server

const socket = socketIOClient("http://localhost:3002"); //development;

// In production, the express server will be the one to serve the react application so we can leave out the connection string argument, which will allow the socket to default to it origin (theoretically your express server)

// const socket = socketIOClient(); //production

export default class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      drawing: false,
      currentColor: "red",
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      cleared: false,
      username: null,
      room: null,
      userList: [],
    };

    this.whiteboard = React.createRef();

    socket.on("joined", (joined) => {
      this.setState({
        id: joined.id,
        username: joined.username,
        room: joined.room,
      });
    });

    socket.on("users", (users) => {
      this.setState({
        userList: users,
      });
    });

    socket.on("cleared", () => {
      this.state.whiteboard
        .getContext("2d")
        .clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    });

    socket.on("drawing", (data) => {
      let w = this.getCanvasWidth()();
      let h = this.getCanvasHeight()();

      if (!isNaN(data.x0 / w) && !isNaN(data.y0)) {
        this.drawLine(
          data.x0 * w,
          data.y0 * h,
          data.x1 * w,
          data.y1 * h,
          data.color
        );
      }
    });
  }

  componentDidMount() {
    socket.emit("join", {
      username: this.props.username,
      room: this.props.room,
    });

    this.setState({
      whiteboard: this.whiteboard.current,
      username: this.props.username,
    });
    this.whiteboard.current.style.height = this.getCanvasHeight();
    this.whiteboard.current.style.width = this.getCanvasWidth();

    this.whiteboard.current.addEventListener(
      "mousedown",
      this.onMouseDown,
      false
    );
    this.whiteboard.current.addEventListener("mouseup", this.onMouseUp, false);
    this.whiteboard.current.addEventListener("mouseout", this.onMouseUp, false);
    this.whiteboard.current.addEventListener(
      "mousemove",
      this.throttle(this.onMouseMove, 5),
      false
    );

    this.whiteboard.current.addEventListener(
      "touchstart",
      this.onMouseDown,
      false
    );

    this.whiteboard.current.addEventListener(
      "touchmove",
      this.throttle(this.onTouchMove, 5),
      false
    );

    this.whiteboard.current.addEventListener("touchend", this.onMouseUp, false);

    document.querySelector('#whiteboard').addEventListener('resize', this.onResize);
  }

  drawLine = (x0, y0, x1, y1, color, emit, force) => {
    let context = this.state.whiteboard.getContext("2d");
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.strokeStyle = color;
    context.lineWidth = 2;
    // if (force) {
    // 	context.lineWidth = 1.75 * (force * (force + 3.75));
    // }
    context.stroke();
    context.closePath();

    if (!emit) {
      return;
    }
    var w = this.getCanvasWidth();
    var h = this.getCanvasHeight();
    this.setState(() => {
      if (!isNaN(x0 / w)) {
        socket.emit("drawing", {
          x0: x0 / w,
          y0: y0 / h,
          x1: x1 / w,
          y1: y1 / h,
          color: color,
          room: this.state.room,
          force: force,
        });

        return {
          cleared: false,
        };
      }
    });
  };

  onMouseDown = (e) => {
    const differY = window.innerHeight - this.getCanvasHeight();
    this.setState(() => {
      return {
        currentX: e.clientX,
        currentY: e.clientY+differY,
        drawing: true,
      };
    });
  };

  onMouseUp = (e) => {
    const differY = window.innerHeight - this.getCanvasHeight();
    this.setState(() => {
      return {
        drawing: false,
        currentX: e.clientX,
        currentY: e.clientY+differY,
      };
    });
  };

  onMouseMove = (e) => {
    if (!this.state.drawing) {
      return;
    }
    const differY = window.innerHeight - this.getCanvasHeight();
    this.setState(() => {
      return {
        currentX: e.clientX,
        currentY: e.clientY+differY,
      };
    }, this.drawLine(this.state.currentX, this.state.currentY, e.clientX, e.clientY+differY, this.state.currentColor, true));
  };

  onTouchMove = (e) => {
    if (!this.state.drawing) {
      return;
    }
    console.log();
    this.setState(() => {
      this.drawLine(
        this.state.currentX,
        this.state.currentY,
        e.touches[0].clientX,
        e.touches[0].clientY,
        this.state.currentColor,
        true,
        e.touches[0].force
      );
      return {
        currentX: e.touches[0].clientX,
        currentY: e.touches[0].clientY,
      };
    });
  };

  onResize = () => {
    this.setState({
      windowWidth: this.getCanvasWidth(),
      windowHeight: this.getCanvasHeight(),
    });
  };

  throttle = (callback, delay) => {
    let previousCall = new Date().getTime();
    return function () {
      let time = new Date().getTime();

      if (time - previousCall >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  };

  selectColor = (color) => {
    this.setState(() => {
      socket.emit("color-change", {
        id: this.state.id,
        username: this.state.username,
        room: this.state.room,
        color: color.hex,
      });
      return {
        currentColor: color.hex,
      };
    });
  };

  clearBoard = () => {
    socket.emit("clear", this.state.room);
  };

  leave = () => {
    socket.emit("leaveroom", { id: this.state.id, room: this.state.room });
    this.props.toggleWhiteBoard();
  };

  getCanvasWidth(){
    let board = document.getElementById("whiteboard");
    let cs = window.getComputedStyle(board);
    return parseInt(cs.getPropertyValue("width"), 10);
  }
  
  getCanvasHeight(){
    let board = document.getElementById("whiteboard");
    let cs = window.getComputedStyle(board);
    return parseInt(cs.getPropertyValue("height"), 10);
  }

  render() {
    return (
      <div id="whiteboard">
        <canvas
          height="768px"
          width="1024px"
          ref={this.whiteboard}
          className="whiteboard"
        />
      </div>
    );
  }
}
