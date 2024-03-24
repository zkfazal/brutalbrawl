import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { FontLoaderPlugin } from './plugins/font_loader_plugin.js';
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 720,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: "matter",
        matter: {
            debug: true
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ],
    plugins: {
        global: [{
            key: 'FontLoaderPlugin',
            plugin: FontLoaderPlugin,
            start: true
        }],
        scene: [
            {
              plugin: PhaserMatterCollisionPlugin, // The plugin class
              key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
              mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
            }
          ]
    }
};

export default new Phaser.Game(config);
