import { Game, AUTO } from "phaser";
import Level from "./src/Scene/Level";
import GameOver from "./src/Scene/GameOver";
import StartMenu from "./src/Scene/StartMenu";

const config = {
  width: 420,
  height: 640,
  type: AUTO,
  scene: [StartMenu, Level, GameOver],
  physics:{
    default: 'arcade',
    arcade: {
      gravity: {
        y: 600
      }, debug: false
    }
  }
}

new Game(config);