class Bob {
    constructor(x,y,radius){
      this.body = Bodies.circle(x,y,radius);
      World.add(world, this.body);
    }
  
    display() {
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius);
  
      
  
      
  }
}