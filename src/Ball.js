class Ball
{
    constructor()
    {
        this.startPos = {x: game.world.centerX / 2, y: game.world.centerY / 1.4};
        this.moveSpeed = 6;
        this.angleSpeed = 0.4;

        this.sprite = game.add.sprite(this.startPos.x, this.startPos.y, "ball");

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 800;
        this.sprite.body.allowGravity = false;

        console.log(scaleRatio);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = 0;

        this.sprite.inputEnabled = true;
        this.sprite.input.enableDrag();

        this.sprite.events.onDragUpdate.add(this.dragUpdate.bind(this));
        this.sprite.events.onDragStop.add(this.dragStop.bind(this));
    }

    dragUpdate()
    {
        let x = this.startPos.x - this.sprite.x;
        let y = this.startPos.y - this.sprite.y;
        let dist = Math.sqrt(x * x + y * y);

        if (dist > 10)
        {
            let angle = Math.atan2(this.startPos.y - this.sprite.y, this.startPos.x - this.sprite.x) / (Math.PI / 180);
            this.sprite.angle = angle + 90;
        }
    }

    dragStop()
    {
        this.sprite.body.allowGravity = true;

        let x = (this.startPos.x - this.sprite.x) * this.moveSpeed;
        let y = (this.startPos.y - this.sprite.y) * this.moveSpeed;
        this.sprite.body.velocity.setTo(x, y);

        this.sprite.body.angularVelocity += this.angleSpeed * x;
    }

}
