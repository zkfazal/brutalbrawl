export class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene.matter.world, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    getBody() {
        return this.body;
    }

    log() {
        console.log(this);
    }

}