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
        //Background image
        this.add.image(210, 320, 'background')
            .setScrollFactor(0, 0).setScale(1.5);

        //Game-Over image
        this.add.image(210, 340, 'gameOver')
            .setScrollFactor(0, 0).setScale(1.5);

        //return to "Level.js"
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('level');
        })
        this.input.keyboard.once('keydown-ESC', () => {
            this.scene.start('startMenu');
        })
    }
}