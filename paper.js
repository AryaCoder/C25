class Paper{
    constructor(x,y,r){
        var options = {
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }
       
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.image=loadImage("paper.png")
        World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke(230);
			fill(230);
			ellipse(0,0,this.r+100,this.r+100)
			imageMode(CENTER);
        image(this.image,0,0,200);
			
            //draw the ellipse here to display the rubber ball
            
			pop()
	}

}