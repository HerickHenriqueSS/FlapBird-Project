import { Scene } from "phaser";

export default class StarMenu extends Scene{

    constructor(){
        super('startMenu');
    }

    playerBlueDown = "assets/bluebird-downflap"
    playerBlueUp = "assets/bluebird-upflap"
    playerRedDown = "assets/redbird-downflap"
    playerRedUp = "assets/redbird-upflap"

    preload(){
        this.load.image('background', "assets/background-day.png");
        this.load.image('massage', 'assets/message.png');
        this.load.image('birdBlue', this.playerBlueDown);
        this.load.image('birdRed', this.playerRedDown);

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
        
        const style = {color: '#000', fontSize: 30};
        this.repeatText = this.add.text(210, 550, 'Press Space to Start', style);
        this.repeatText.setScrollFactor(0);
        this.repeatText.setOrigin(0.5, 0)
    }
}