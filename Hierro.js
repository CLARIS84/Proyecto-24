class Hierro{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
	var options ={
		restitution:.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);
	}
	display()
	{
			var pos=this.body.position;		
			push()
			rectMode(CENTER)
			fill("blue");
			rect(pos.x,pos.y,this.w,this.h)
			pop()
			
	}

}