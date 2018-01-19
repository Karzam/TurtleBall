class BasketManager
{
    constructor()
    {
        this.basketsList = [];

        window.setInterval(function()
        {
            this.basket = game.add.sprite(game.world.centerX / 2, game.world.centerY * 0.4, 'basket');
            this.basket.anchor.setTo(0.5, 0.5);
            this.basket.scale.setTo(scaleRatio * 2, scaleRatio * 2);
            this.basketsList.push(this.basket);
        }.bind(this), 2000);
    }

    render()
    {

    }

}
