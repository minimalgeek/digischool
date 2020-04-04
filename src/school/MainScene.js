import Phaser from "phaser";
import { config } from "./School";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload(){
    this.load.image("terrain", "./assets/image/terrain_atlas.png");
    this.load.image("items", "./assets/image/items.png");

    this.load.tilemapTiledJSON("mappy", "./assets/maps/mappy.json");
  }

  create() {
    let mappy = this.add.tilemap("mappy");

        let terrain = mappy.addTilesetImage("terrain_atlas", "terrain");
        let itemset = mappy.addTilesetImage("items");

        //layers
        let botLayer = mappy.createStaticLayer("bot", [terrain], 0, 0).setDepth(-1);
        let topLayer = mappy.createStaticLayer("top", [terrain], 0, 0);
  }

  update() {}
}

export default MainScene;
