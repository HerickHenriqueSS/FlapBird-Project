import { Game, AUTO } from "phaser";
import Level from "./src/Scene/Level";

const config = {
  width: 420,
  height: 640,
  type: AUTO,
  scene: [Level],
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