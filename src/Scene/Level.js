import { Scene, Math } from "phaser";
import GameOver from "./GameOver";

export default class Level extends Scene{

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player;

    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    pipeDowns;
    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    pipeuPs;
    
    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors;


    constructor(){
        super('level');
    }

    preload(){
        this.load.image('background', "assets/background-day.png");
        this.load.image('base', "assets/base.png");
        this.load.image('birdDown', "assets/bluebird-downflap.png");
        this.load.image('birdUp', "assets/bluebird-upflap.png");
        this.load.image('pipeDown', "assets/pipe-greenDown.png");
        this.load.image('pipeUp', "assets/pipe-greenUp.png");
        this.load.audio('fly', "assets/sfx/wing.ogg");
        this.load.audio('gameOver', 'assets/sfx/die.ogg')

    }
    
    create(){
        //Background
        this.add.image(210, 320, 'background')
            .setScrollFactor(0, 0).setScale(1.5);
        
        //Physics 
        this.pipeDowns = this.physics.add.staticGroup();
        this.pipeUps = this.physics.add.staticGroup();
        

        //Random Pipes
        for (let i = 0; i < 5; i++) {
            const x = 400 + (250 * i);
            const y = Math.Between(320, 500);


            // Pipe down load
            /** @type {Phaser.Physics.Arcade.Sprite} */
            const pipeDown = this.pipeDowns.create(x, y, 'pipeDown');
            pipeDown.setScale(1.5);
            pipeDown.setOrigin(0.5, 0);
            pipeDown.body.updateFromGameObject();


            //Pipe Up load
            const pipeUp = this.pipeUps.create(x, y - 150, 'pipeUp')
            pipeUp.setScale(1.5)
            pipeUp.setOrigin(0.5, 1);
            pipeUp.body.updateFromGameObject();
        }


        //Player 
        this.player = this.physics.add.image(210, 310, 'birdDown')
            .setScale(1.5);


        //Player velocity
        this.player.setVelocityX(100); 

        //Camera
        this.cameras.main.startFollow(this.player);

        //Player dead Zone
        this.cameras.main.setDeadzone(undefined ,this.scale.x-200);

        //Cursors
        this.cursors = this.input.keyboard.createCursorKeys();

        //Colliders
        this.physics.add.collider(this.player, this.pipeDowns, this)
        this.physics.add.collider(this.player, this.pipeUps, this)

        console.log(this.colisão)

    }
    
    update(time, del){
        if(this.cursors.space.isDown){
            this.player.setVelocityY(-180);
            this.player.setTexture('birdUp')
            this.sound.play('fly')
        }else{
            this.player.setTexture('birdDown')
        }

        //Recycle pipes
        this.pipeUps.children.iterate( child => {
            /** @type {Phaser.Physics.Arcade.Sprite} */
            const pipeUp = child;

            // Position pipes X
            const scrollX = this.cameras.main.scrollX;
            console.log(scrollX)
            if( pipeUp.x + 400 <= scrollX){
                pipeUp.y +150 <= Math.Between(320,500);
                pipeUp.x = scrollX + 870;
                pipeUp.body.updateFromGameObject();

            }
        })
        this.pipeDowns.children.iterate( child => {
            /** @type {Phaser.Physics.Arcade.Sprite} */
            const pipeDown = child;

            // Position pipes X
            const scrollX = this.cameras.main.scrollX;
            console.log(scrollX)
            if( pipeDown.x +400 <= scrollX){ 
                pipeDown.y -150 <= Math.Between(320,500)
                pipeDown.x = scrollX + 870;
                pipeDown.body.updateFromGameObject();

            }
        })
        
        if( this.player.y >= this.scale.height+100){
            this.sound.play('gameOver');
            this.scene.start('game-over');
            
        }  
        
        
    }
}
