import React from "react";
import Phaser from "phaser";
import MainScene from "./MainScene";
import LoadingScene from "./LoadingScene";

export const config = {
  // width: "75%",
  height: "74%",
  zoom: 1.28,
  type: Phaser.AUTO,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  scene: [LoadingScene, MainScene],
  pixelArt: true,
  render: {
    pixelArt: true,
  },

  parent: "phaser-container",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

export class School extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const game = new Phaser.Game(config);
    console.log(game);
  }

  render() {
    return <div className="phaserContainer" id="phaser-container"></div>;
  }
}

/*export const School = () => {
  new Phaser.Game(config);
  return <div className="phaserContainer" id="phaser-container"></div>;
};*/
