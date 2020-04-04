import React, { useState } from "react";
import Phaser from "phaser";
import { IonPhaser } from "@ion-phaser/react";
import MainScene from "./MainScene";

export const School = () => {
  const [initialize, setInitialize] = useState(true);

  const [game, setGame] = useState({
    width: 256,
    height: 272,
    type: Phaser.AUTO,
    scene: MainScene,
    pixelArt: true,
  });
  return <IonPhaser game={game} initialize={initialize} />;
};
