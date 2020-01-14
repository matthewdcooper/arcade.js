
Ball = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.airfriction = 0.999;

    // determine ball's starting speed and direction randomly
    this.yspeed = random(-5, 5);
    var direction = (random(0, 1) > 0.5);
    this.xspeed = random(5, 7);
    if (direction) {
        this.xspeed *= -1;
    }

    var pause = 240; // pause for frames before moving

    this.update = function() {
        if (pause > 1) {
            text(floor(pause/60), width/2, height/3);
            pause --;
        } else {
        this.yspeed *= this.airfriction;
        this.xspeed *= this.airfriction;
        this.x += this.xspeed;
        this.y += this.yspeed;
        }

    }

    this.show = function() {
        ellipse(this.x, this.y, this.r*2, this.r*2)

    }
}
