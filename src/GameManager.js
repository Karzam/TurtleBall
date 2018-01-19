/*****************************************************

                    GameManager.js

*****************************************************/

GameManager = function() {}

GameManager.prototype = Object.create(Phaser.Sprite.prototype);
GameManager.prototype.constructor = GameManager;

GameManager.prototype.create = function()
{
    game.stage.backgroundColor = '#22A7F0';

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 250;

    this.cloudManager = new CloudManager();
    this.ball = new Ball();
}

GameManager.prototype.render = function()
{
    this.cloudManager.render();
}
