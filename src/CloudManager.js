class CloudManager
{
    constructor()
    {
        this.cloudsList = [];

        window.setInterval(function()
        {
            const sprite = (Math.random() > 0.5 ? "cloud_1" : "cloud_2");
            this.cloud = game.add.sprite(game.world.centerX * 1.2, game.world.height * Math.random(), sprite);
            this.cloud.anchor.setTo(0.5, 0.5);
            this.cloud.scale.setTo(scaleRatio / 2, scaleRatio / 2);
            this.cloudsList.push(this.cloud);
        }.bind(this), 3000);
    }

    render()
    {
        this.cloudsList.forEach(function(element, index, array) {
            element.position.x -= 1;

            if (element.position.x < -game.world.width * 0.3) {
                element.destroy();
                array.splice(0, 1);
            }
        });
    }
}
