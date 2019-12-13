class Pokemon {
    constructor() { //set basic properties
        this.r = 50;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2;
    }
    
    jump() {
        this.vy = -10;
    }
    
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = contrain(this.y, 0, height - this.r);
    }
    
    show() {
        //Image('#run',this.x, this.y, this.r, this.r);
        rect(this.x, this.y, this.r, this.r);
    }
    
    
    
    
    
    

    
    
    
    
}