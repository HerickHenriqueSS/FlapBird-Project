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

        //Points
        const style = {color: '#000', fontSize: 30};
        this.repeatText = this.add.text(210, 530, 'Press Space to Repeat', style);
        this.menuText = this.add.text(210, 570, 'Press ESC to Menu', style);
        this.repeatText.setScrollFactor(0);
        this.repeatText.setOrigin(0.5, 0)
        this.menuText.setScrollFactor(0);
        this.menuText.setOrigin(0.5, 0)
    }
}