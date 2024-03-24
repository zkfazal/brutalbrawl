import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        // this.add.image(512, 384, 'background');

        // this.add.image(512, 300, 'logo');

        // this.add.text(512, 460, 'Main Menu', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5);

        this.anims.create(
            {
                key: 'mainmenu',
                frames: [
                    { key: 'mainmenu_001' },
                    { key: 'mainmenu_002' },
                    { key: 'mainmenu_003' },
                    { key: 'mainmenu_004' },
                ],
                frameRate: 15,
                repeat: -1
            });
        this.add.sprite(0, 0, 'mainmenu_001').setOrigin(0, 0).play('mainmenu');

        this.add.text(100, 100, 'Hello Phaser 3 with custom font!', { fontFamily: 'dragon_woff', fontSize: '32px', color: '#ffffff' });

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
