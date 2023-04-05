import { Scene } from "phaser";

export default class StarMenu extends Scene{

    constructor(){
        super('startMenu');
    }

    preload(){
        this.load.image('background', "assets/background-day.png");
        this.load.image('massage', 'assets/message.png');

    }

    create(){
        //Background image
        this.add.image(210, 320, 'background')
            .setScrollFactor(0, 0).setScale(1.5);

        //Menu Game    
        this.add.image(210, 320, 'massage')
            .setScrollFactor(0, 0).setScale(1.5);

        //Press to start game
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('level');
        })
    }
}