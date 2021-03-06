class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            friction:10.0,
              isStatic:true,  
        }
        this.body = Bodies.rectangle(625, 140, width, height, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(625,140);
        rotate(angle);
        imageMode(CENTER);
      
        fill(225);
        image(dustbinImage,0, 0, this.width, this.height);
        pop();
      }
    };
