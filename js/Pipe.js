class Pipe {
	
	constructor(tempWidth, tempHeight) {
		this.xPos = tempWidth; // starting x position for pipe
		this.width = 50; // width of pipe
		
		this.speed = 2; // speed of pipe (pixels/loop)
		
		this.distanceFromEdge = 50; // minimum distance pipe can be from top or bottom
		
		this.birdPassed = false; // if bird has passed the pipe yet
		
		this.maxYBeforeNew = tempWidth * 0.7; // max y position before a new pipe appears
		
		this.gapSize = 200; // size of gap for bird to fly through
		this.gapTop = (Math.random() * (tempHeight - this.gapSize - (this.distanceFromEdge * 2))) + this.distanceFromEdge; // y position of top of gap
		this.gapBottom = this.gapTop + this.gapSize; // y position of bottom of gap
	}
	
	update() {
		this.xPos -= this.speed;
	}
}