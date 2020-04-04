import Phaser from "phaser";

class LoadingScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    this.load.image("background", "assets/images/background.png");
    this.load.spritesheet("ship", "assets/spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet("powerup", "assets/spritesheets/power-up.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: "explosion_anim",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: "red",
      frames: this.anims.generateFrameNumbers("powerup", {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });
    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("powerup", {
        start: 2,
        end: 3,
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.add.text(20, 20, "Loading game...");
    this.scene.start("MainScene");
  }
}

export default LoadingScene;
