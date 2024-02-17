// Combined.js

// Include pixi.js library (ensure this is the minified version if available)
// Add the content of pixi.js file here

document.addEventListener('DOMContentLoaded', () => {
    // Set up Pixi.js application
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xFFFFFF,
        resolution: window.devicePixelRatio || 1,
    });

    // Append canvas to the container
    document.getElementById('pixi-container').appendChild(app.view);

    // Load assets using PIXI loader
    PIXI.Loader.shared
        .add('background', 'assets/showdown-off.png')
        .add('character', 'assets/header.png')
        .add('video', 'assets/showdown css.mov')  // Add the video file
        .load(setup);

    function setup() {
        // Create sprites
        const background = new PIXI.Sprite(PIXI.Loader.shared.resources['background'].texture);
        const character = new PIXI.Sprite(PIXI.Loader.shared.resources['character'].texture);

        // Create video sprite
        const videoTexture = PIXI.Texture.from('video'); // Corrected line
        const videoSprite = new PIXI.Sprite(videoTexture);

        // Add sprites to the stage
        app.stage.addChild(background);
        app.stage.addChild(character);
        app.stage.addChild(videoSprite);

        // Position sprites, animate, and add any additional logic
        // ...

        // Flicker the lightning bolt at a 10-sec interval
        setInterval(() => {
            character.visible = !character.visible; // Toggle visibility
        }, 10000);

        // Play the video
        videoSprite.play();
    }
});
