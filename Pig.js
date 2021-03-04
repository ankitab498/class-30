class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255 //completely visible
  }

  display(){
    console.log(this.body.speed)

    if(this.body.speed<3){
    super.display()
    }
    else{

      World.remove(world, this.body) //removing the body from world
      push()
      this.visibility = this.visibility - 5
      tint(255, this.visibility)
      image(this.image , this.body.position.x , this.body.position.y, 50, 50)
      pop()
    }
  }
};
//visibility = 255 (true)
//1 byte = 8 bit 
//11111111 -> 255
//visibility = 0 (false)
// 00000000
