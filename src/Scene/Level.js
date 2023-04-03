import { Scene, Math } from "phaser";

export default class Level extends Scene{

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player;

    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    pipeDowns;


    constructor(){
        super('level');
    }

    preload(){
        this.load.image('background', "assets/background-day.png");
        this.load.image('base', "assets/base.png");
        this.load.image('birdUp', "assets/bluebird-upflap.png");
        this.load.image('pipeDown', "assets/pipe-greenDown.png");
        this.load.image('pipeUp', "assets/pipe-greenUp.png");

    }
    
    create(){
        //Background
        this.add.image(210, 320, 'background')
            .setScrollFactor(0, 0).setScale(1.5);

        
        //Physics 
        this.pipeDowns = this.physics.add.staticGroup();
        this.pipeUps = this.physics.add.staticGroup();
        
        for (let i = 0; i < 5; i++) {
            const x = 200 * i;
            const y = Math.Between(320, 500);

            /** @type {Phaser.Physics.Arcade.Sprite} */
            const pipeDown = this.pipeDowns.create(x, y, 'pipeDown');
            pipeDown.setScale(1.5);
            pipeDown.setOrigin(0.5, 0);
            pipeDown.body.updateFromGameObject();

            const pipeUp = this.pipeUps.create(x, y - 150, 'pipeUp')
            pipeUp.setScale(1.5)
            pipeUp.setOrigin(0.5, 1);
            pipeUp.body.updateFromGameObject();
        }


        //Player 
        this.player = this.physics.add.image(210, 310, 'birdUp')
            .setScale(1.5);
    }
    
    update(){
    
        
    }
}
