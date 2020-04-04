import Phaser from "phaser";
import background from "../assets/background.png";
import ship1 from "../assets/ship.png";
import ship2 from "../assets/ship2.png";
import ship3 from "../assets/ship3.png";

const backgroundImage = "background";
// export default {
//   init: function () {
//     this.cameras.main.setBackgroundColor("#24252A");
//   },
//   create: function () {
//     this.helloWorld = this.add.text(
//       this.cameras.main.centerX,
//       this.cameras.main.centerY,
//       "Hello World",
//       {
//         font: "40px Arial",
//         fill: "#ffffff",
//       }
//     );
//     this.helloWorld.setOrigin(0.5);
//   },
//   update: function () {
//     this.helloWorld.angle += 1;
//   },
// };

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  init() {
    console.log("henlo");
  }

  preload() {
    this.load.image(backgroundImage, background);
    // this.load.image("ship1", ship1);
    // this.load.image("ship2", ship2);
    // this.load.image("ship3", ship3);
  }

  create() {
    this.background = this.add.image(0, 0, backgroundImage);
    this.background.setOrigin(0, 0);
  }

  update() {}
}

export default new MainScene();
