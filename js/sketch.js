let birdImg;
function preload() {
  birdImg = loadImage('img/bird.png');
}

function setup() {
	createCanvas(canvWidth, canvHeight);
}

let game;

function draw() {
	background(76, 188, 252);
	textSize(32);
	textAlign(CENTER);
	imageMode(CENTER);
	
	if (!game) {
		fill('white');
		text('Press enter to start', width / 2, (height / 2) + 20);
		
		textSize(40);
		text('Alma Bird ;P', width / 2, (height / 2) - 50);
	} else {
		fill('#73BE2E');
		
		if (game.updatePipes()) { // returns collision
			fill('white');
			text(`Score: ${game.score}`, 70, 40);
			
			fill('red');
			game.updateBird();

			fill('white');
			text('Game Over', width / 2, height / 2);
			game = null;
			noLoop();
		} else {
			fill('white');
			text(`Score: ${game.score}`, 70, 40);
			
			game.updateBird();
		}
	}
}

function keyPressed() {
  if (keyCode == ENTER || keyCode == 32) {
		if (!game) {
			game = new Game(canvWidth, canvHeight);
			loop();
		} else {
			game.bird.jump();
		}
  }
}

function mousePressed() {
  if (!game) {
		game = new Game(canvWidth, canvHeight);
		loop();
	} else {
		game.bird.jump();
	}
}