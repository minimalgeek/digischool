import Phaser from "phaser";
import { config } from "./School";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    this.background = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,
      "background"
    );
    this.background.setOrigin(0, 0);

    this.ship1 = this.add.sprite(
      config.width / 2 - 50,
      config.height / 2,
      "ship"
    );
    this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
    this.ship3 = this.add.sprite(
      config.width / 2 + 50,
      config.height / 2,
      "ship3"
    );

    this.physics.world.setBoundsCollision();
    this.powerUps = this.physics.add.group();
    for (let index = 0; index < 4; index++) {
      let powerup = this.physics.add.sprite(16, 16, "powerup");
      this.powerUps.add(powerup);
      powerup.setRandomPosition(
        0,
        0,
        this.game.config.width,
        this.game.config.height
      );

      if (Math.random() > 0.5) {
        powerup.play("red");
      } else {
        powerup.play("gray");
      }

      powerup.setVelocity(100, 100);
      powerup.setCollideWorldBounds(true);
      powerup.setBounce(1);
    }

    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    this.input.on("gameobjectdown", this.destroyShip, this);

    // this.add.text(20, 20, "Playing game", {
    //   font: "25px Arial",
    //   fill: "yellow",
    // });
  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y >= config.height) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    ship.x = Phaser.Math.Between(0, config.width);
  }

  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explosion_anim");
  }

  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);

    this.background.tilePositionY -= 0.5;
  }
}

export default MainScene;
