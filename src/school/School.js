import React from "react";
import Phaser from "phaser";
import MainScene from "./MainScene";
import LoadingScene from "./LoadingScene";

export const config = {
  width: "75%",
  height: "100%",
  type: Phaser.AUTO,
  scene: [LoadingScene, MainScene],
  pixelArt: true,
  render: {
    pixelArt: true,
  },
  
  parent: "phaser-container",
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

new Phaser.Game(config);

export const School = () => {
  return <div className="phaserContainer" id="phaser-container"></div>;
};
