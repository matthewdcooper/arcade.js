var players = [];
var ballX;
var ballY;
var ballR;

function setup() {
    createCanvas(800, 600);

    textSize(32);
    textAlign(CENTER, CENTER);

    fill(255);
    noStroke();
    smooth();

    ballX = width/2;
    ballY = height/2;
    ballR = 15;

    ball = new Ball(ballX, ballY, ballR);
    players.push(new Player(20, height/2));
    players.push(new Player(width-30, height/2));
}

function draw() {
    background(1);
    ball.update();
    ball.show();
    for (var i = 0; i < players.length; i++) {
        players[i].update();
        players[i].show();
    }

    //check ball off left of screen
    if (ball.x < 0 - ball.r) {
        players[1].score += 1;
        ball = new Ball(ballX, ballY, ballR);
    }

    //check ball off right of screen
    if (ball.x > width + ball.r) {
        players[0].score += 1;
        ball = new Ball(ballX, ballY, ballR);
    }

    //check ball bounce on bottom or top
    if (ball.y > height - ball.r || ball.y < 0 + ball.r) {
        ball.yspeed *= -1;
    }

    // check collision with left player
    if (   ball.x < players[0].x + players[0].width + ball.r
        && ball.y > players[0].y
        && ball.y < players[0].y + players[0].height) {
            ball.xspeed *= -1;
            ball.xspeed += 1;

            var distance;
            distance = ball.y - (players[0].y + players[0].height/2);
            ball.yspeed += distance/7;
    }

    // check collision with right player
    if (   ball.x > players[1].x - ball.r
        && ball.y > players[1].y
        && ball.y < players[1].y + players[1].height) {
            ball.xspeed *= -1;
            ball.xspeed -= 1;
 
            var distance;
            distance = ball.y - (players[1].y + players[1].height/2);
            ball.yspeed += distance/7;
    }

    // check players off screen
    for (var i = 0; i < 2; i++) {
        if (players[i].y < 0) {
            players[i].y = 0;
        } else if (players[i].y > height - players[i].height) {
            players[i].y = height - players[i].height;
        }
    }
}

function keyPressed() {
    if (key === 'W') {
        players[0].yspeed = -7;

    } else if (key === 'S') {
        players[0].yspeed = 7;

    } else if (keyCode === UP_ARROW) { 
        players[1].yspeed = -7;

    } else if (keyCode === DOWN_ARROW) {
        players[1].yspeed = 7;

    }
}


function keyReleased() {
    if (key === 'W' || key === 'S') {
        players[0].yspeed = 0;

    } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) { 
        players[1].yspeed = 0;
    }
}





