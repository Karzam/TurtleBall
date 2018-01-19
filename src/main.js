// ------------------------------------------------------------------------------------------------
//
//                                             Turtle Ball!
//
//                                     Developed by Baptiste Ménard
//
// ------------------------------------------------------------------------------------------------

var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'world', {preload: preload, create: create, render: render});
var scaleRatio = window.devicePixelRatio / 3;

var gameManager;

function preload()
{
    game.load.image('cloud_1', '../bin/assets/cloud_1.png');
    game.load.image('cloud_2', '../bin/assets/cloud_2.png');
    game.load.image('ball', '../bin/assets/ball.png');
    game.load.image('basket', '../bin/assets/basket.png');
}

function create()
{
    gameManager = new GameManager();
    gameManager.create();
}

function render()
{
    if (gameManager != null) {
        gameManager.render();
    }
}
