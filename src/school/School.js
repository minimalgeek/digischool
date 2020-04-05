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

new Phaser.Game(config);

export const School = () => {
  return <div className="phaserContainer" id="phaser-container"></div>;
};
