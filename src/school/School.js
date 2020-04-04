import React from "react";
import Phaser from "phaser";
import MainScene from "./MainScene";
import LoadingScene from "./LoadingScene";

export const config = {
  width: 256,
  height: 272,
  type: Phaser.AUTO,
  scene: [LoadingScene, MainScene],
  pixelArt: true,
  parent: "phaser-container",
};

const game = new Phaser.Game(config);

export const School = () => {
  return <div className="phaserContainer" id="phaser-container"></div>;
};
