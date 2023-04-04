import { Scene } from "phaser";

export default class GameOver extends Scene{

    constructor(){
        super('game-over');
    }

    preload(){
        this.load.image('background', "assets/background-day.png");
        this.load.image('gameOver', 'assets/gameover.png')
    }

    create(){
        //Background
        this.add.image(210, 320, 'background')
            .setScrollFactor(0, 0).setScale(1.5);

        this.add.image(210, 340, 'gameOver')
            .setScrollFactor(0, 0).setScale(1.5);

        console.log('ok');


        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('level');
        })
    }
}