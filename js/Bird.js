class Bird {
	
	constructor(x, y, width, height) {
		this.x = x; // bird's x position
		this.y = y; // bird's y position
		this.width = width; // bird's width
		this.height = height; // bird's height
		
		this.velocity = 0; // bird's velocity (negative = up, positive = down)
		
		this.gravity = 0.7; // gravity pulling bird
		this.uplift = 12; // uplift from jump
	}
	
	fall(tempHeight) {
		this.y += this.velocity;
		
		this.velocity += this.gravity;
		
		if (this.y > tempHeight) {
			this.y = tempHeight;
		} else if (this.y < 0) {
			this.y = 0;
			this.velocity = 5;
		}
	}
	
	jump() {
		this.velocity = this.uplift * -1;
	}
}