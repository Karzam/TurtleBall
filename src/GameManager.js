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

    this.basketManager = new BasketManager();
    this.ball = new Ball();
}

GameManager.prototype.render = function()
{
    this.basketManager.render();
}
