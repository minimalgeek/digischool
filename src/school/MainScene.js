import Phaser from "phaser";
import { config } from "./School";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.add.text(20, 20, "Ide jon Bohi gyonyoru alkotasa");
  }

  update() {}
}

export default MainScene;
