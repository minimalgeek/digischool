import Phaser from "phaser";
import { config } from "./School";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    let digiSchoolMap = this.make.tilemap({ key: "digi_school_map" });

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
    
  }

  update() {}
}

export default MainScene;
