import Phaser from "phaser";

class LoadingScene extends Phaser.Scene {
  constructor() {
    super("LoadingScene");
  }

  preload() {
    // this.load.image("background", "assets/images/background.png");
    // this.load.spritesheet("ship", "assets/spritesheets/ship.png", {
    //   frameWidth: 16,
    //   frameHeight: 16,
    // });
    // this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
    //   frameWidth: 32,
    //   frameHeight: 16,
    // });
    // this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
    // this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {
    //   frameWidth: 16,
    //   frameHeight: 16,
    // });
    // this.load.spritesheet("powerup", "assets/spritesheets/power-up.png", {
    //   frameWidth: 16,
    //   frameHeight: 16,
    // });
    this.load.image("doors", "assets/maps/lpc-doors-animated-1.png");
    this.load.image("stardew_valley", "assets/maps/sw.png");
    this.load.image("school", "assets/maps/School1.png");

    this.load.tilemapTiledJSON(
      "digi_school_map",
      "assets/maps/digi_school_map.json"
    );

    // this.load.atlas(
    //   "characters",
    //   "./assets/sprite/characters.png",
    //   "./assets/sprite/characters.json"
    // );
    // this.load.atlas(
    //   "daze",
    //   "./assets/sprite/daze.png",
    //   "./assets/sprite/daze.json"
    // );
    // this.load.spritesheet("rapier", "./assets/sprite/WEAPON_rapier.png", {frameHeight: 192, frameWidth: 192});
  }

  create() {
    /*
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
    */

    let digi_school_map = this.add.tilemap("digi_school_map");

    let assets = digi_school_map.addTilesetImage(
      "stardew_valley",
      "school",
      "doors"
    );

    let chairsBack = digi_school_map.createStaticLayer(
      "chairs-back",
      [assets],
      0,
      0
    );
    let tables = digi_school_map.createStaticLayer("tables", [assets], 0, 0);
    let chairs = digi_school_map.createStaticLayer("chairs", [assets], 0, 0);
    let carpet = digi_school_map.createStaticLayer("carpet", [assets], 0, 0);
    let walls_3 = digi_school_map.createStaticLayer("walls 3", [assets], 0, 0);
    let walls_2 = digi_school_map.createStaticLayer("walls 2", [assets], 0, 0);
    let walls = digi_school_map.createStaticLayer("walls", [assets], 0, 0);
    let floor = digi_school_map.createStaticLayer("floor", [assets], 0, 0);

    this.scene.start("MainScene");
  }
}

export default LoadingScene;
