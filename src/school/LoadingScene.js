import Phaser from "phaser";

class LoadingScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    this.load.image("doors", "assets/maps/lpc-doors-animated-1.png");
    this.load.image("School1", "assets/maps/School1.png");
    this.load.image("sw", "assets/maps/sw.png");
    this.load.spritesheet("anna", "./assets/sprite/anna.png", {frameHeight: 64, frameWidth: 64});
    this.load.spritesheet("aaron", "./assets/sprite/aaron.png", {frameHeight: 64, frameWidth: 64});
    this.load.spritesheet("demon", "./assets/sprite/characters.png", {frameHeight: 64, frameWidth: 64});
    this.load.spritesheet("mort", "./assets/sprite/mort.gif", {frameHeight: 64, frameWidth : 64});
    this.load.spritesheet("tard", "./assets/sprite/tard.gif", {frameHeight: 64, frameWidth: 64});
    this.load.spritesheet("vita", "./assets/sprite/vita.gif", {frameHeight: 64, frameWidth: 64});
    this.load.spritesheet("doux", "./assets/sprite/doux.gif", {frameHeight: 64, frameWidth: 64});

    this.load.tilemapTiledJSON(
      "digi_school_map",
      "assets/maps/digi_school_map.json"
    );
  }

  create() {
    this.scene.start("MainScene");
  }

  
}

export default LoadingScene;
