
Player = function(x, y) {
    this.score = 0;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 100;
    this.yspeed = 0;

    this.update = function() {
        this.y += this.yspeed;
    }

    this.show = function() {
        rect(this.x, this.y, this.width, this.height);
        text(this.score, this.x, 30);

    }
}
