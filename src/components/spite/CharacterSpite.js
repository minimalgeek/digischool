import Phaser from "phaser";

class CharacterSpite extends Phaser.Physics.Arcade.Sprite
{	
	constructor(scene, x, y, texture, frame) {
    		super(scene, x, y, texture, frame);

    		this.setOrigin(0.5);

  		scene.sys.updateList.add(this);
       		scene.sys.displayList.add(this);
        	this.setScale(2);
        	scene.physics.world.enableBody(this);
        	this.setImmovable(true);
        	this.hp = 10;
	}

}

export default CharacterSpite;
