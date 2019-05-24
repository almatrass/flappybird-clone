class Game {
	
	constructor(tempWidth, tempHeight) {
		this.width = tempWidth; // canvas width
		this.height = tempHeight; // canvas height
		
		this.bird = new Bird(tempWidth / 2, tempHeight / 2, 30, 50); // create bird
		this.pipes = [new Pipe(tempWidth, tempHeight)]; // create first pipe
		
		this.score = 0; // player score
	}
	
	updateBird() {
		this.bird.fall(height);
		image(birdImg, this.bird.x, this.bird.y, this.bird.width, this.bird.height);
//		ellipse(this.bird.x, this.bird.y, this.bird.width, this.bird.height);
	}
	
	updatePipes() { // Returns collision
		let isTouching = false;
		
		let theBird = this.bird,
				theGame = this;
		
		let lastPipeIndex = this.pipes[this.pipes.length - 1] ? this.pipes.length - 1 : 0;
		
		if (this.pipes[lastPipeIndex].xPos < this.pipes[lastPipeIndex].maxYBeforeNew) {
			this.pipes.push(new Pipe(this.width, this.height));
		}
		if (this.pipes[0].xPos < this.pipes[0].width * -1) {
			this.pipes.shift();
		}
		
		this.pipes.forEach(function(thePipe) {
			thePipe.update();
			rect(thePipe.xPos, 0, thePipe.width, thePipe.gapTop);

			rect(thePipe.xPos, thePipe.gapBottom, thePipe.width, height - thePipe.gapBottom);
			
			if (
				theBird.x + (theBird.width / 2) > thePipe.xPos
				&& 
				theBird.x - (theBird.width / 2) < (thePipe.xPos + thePipe.width)
				&&
				(
				theBird.y - (theBird.height / 2) < thePipe.gapTop
				||
				theBird.y + (theBird.height / 2) > thePipe.gapBottom
				)
			) {
				isTouching = true;
			} else if (theBird.x - (theBird.width / 2) > (thePipe.xPos + thePipe.width) && !thePipe.birdPassed) {
				thePipe.birdPassed = true;
				theGame.score++;
			}
		});
		
		return isTouching;
	}
}