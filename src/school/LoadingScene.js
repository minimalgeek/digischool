import Phaser from "phaser";

class LoadingScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    this.load.image("doors", "assets/maps/lpc-doors-animated-1.png");
    this.load.image("School1", "assets/maps/School1.png");
    this.load.image("sw", "assets/maps/sw.png");

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
