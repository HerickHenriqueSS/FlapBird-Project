import { Game, AUTO } from "phaser";
import Level from "./src/Scene/Level";
import GameOver from "./src/Scene/GameOver";

const config = {
  width: 420,
  height: 640,
  type: AUTO,
  scene: [Level, GameOver],
  physics:{
    default: 'arcade',
    arcade: {
      gravity: {
        y: 500
      }, debug: true
    }
  }
}

new Game(config);