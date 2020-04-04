import Phaser from "phaser";
import {config} from "./School";
import CharacterSprite from "../components/spite/CharacterSpite";

class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {

        this.anims.create({
            key: "left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 9,
                end: 17
            })
        });
        this.anims.create({
            key: "down",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 18,
                end: 26
            })
        });
        this.anims.create({
            key: "up",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 0,
                end: 8
            })
        });
        this.anims.create({
            key: "right",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("anna", {
                start: 27,
                end: 35
            })
        });
    }

    create() {
        let digiSchoolMap = this.make.tilemap({key: "digi_school_map"});

        let doors = digiSchoolMap.addTilesetImage("doors", "doors");
        let school = digiSchoolMap.addTilesetImage("School1", "School1");
        let stardew_valley = digiSchoolMap.addTilesetImage("sw", "sw");

        let floor = digiSchoolMap.createStaticLayer(
            "floor",
            [doors, school, stardew_valley],
            0,
            0
        );
        let carpet = digiSchoolMap.createStaticLayer(
            "Furnitures/carpet",
            [doors, school, stardew_valley],
            0,
            0
        );
        let walls1 = digiSchoolMap.createStaticLayer(
            "Walls/walls1",
            [doors, school, stardew_valley],
            0,
            0
        );
        let walls2 = digiSchoolMap.createStaticLayer(
            "Walls/walls2",
            [doors, school, stardew_valley],
            0,
            0
        );
        let walls3 = digiSchoolMap.createStaticLayer(
            "Walls/walls3",
            [doors, school, stardew_valley],
            0,
            0
        );
        let chairs = digiSchoolMap.createStaticLayer(
            "Furnitures/chairs",
            [doors, school, stardew_valley],
            0,
            0
        );
        let chairsBack = digiSchoolMap.createStaticLayer(
            "Furnitures/chairs-back",
            [doors, school, stardew_valley],
            0,
            0
        );
        let tables = digiSchoolMap.createStaticLayer(
            "Furnitures/tables",
            [doors, school, stardew_valley],
            0,
            0
        );

        //to add collision
       // this.physics.add.collider(this.anna,walls1);

        this.anna = new CharacterSprite(this, 400, 400, "anna", 26);
        window.anna = this.anna;
        this.anna.setSize(40, 50).setOffset(10, 10);
        this.anna.setCollideWorldBounds(true);
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

    }

    update(time, delta) { //delta 16.666 @ 60fps


        if (this.anna.active === true) {
            if (this.keyboard.D.isDown === true) {
                this.anna.setVelocityX(128);

            }

            if (this.keyboard.W.isDown === true) {
                this.anna.setVelocityY(-128);
            }

            if (this.keyboard.S.isDown === true) {
                this.anna.setVelocityY(128);
            }

            if (this.keyboard.A.isDown === true) {
                this.anna.setVelocityX(-128);
            }
            if (this.keyboard.A.isUp && this.keyboard.D.isUp) { //not moving on X axis
                this.anna.setVelocityX(0);
            }
            if (this.keyboard.W.isUp && this.keyboard.S.isUp) { //not pressing y movement
                this.anna.setVelocityY(0);
            }

            if (this.anna.body.velocity.x > 0) { //moving right
                this.anna.play("right", true);
            } else if (this.anna.body.velocity.x < 0) { //moving left
                this.anna.anims.playReverse("left", true);
            } else if (this.anna.body.velocity.y < 0) { //moving up
                this.anna.play("up", true);
            } else if (this.anna.body.velocity.y > 0) { //moving down
                this.anna.play("down", true);
            }
        }

    }
}

export default MainScene;
