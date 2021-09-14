class Stone{
    constructor(x,y,h,w){
        var options={
            restitution:0.08
            }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.h=h;
    this.w=w;
    this.image=loadImage("assets/stone.png")
    World.add(world,this.body);

    }
    show(){
       let pos = this.body.position;
       var angle=this.body.angle;
       push();
      translate(pos.x, pos.y); 
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.w,this.h);
      pop();


    }



}