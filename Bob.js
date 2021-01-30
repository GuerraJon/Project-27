class Bob {
    constructor (x,y,radius,options){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            denstiy:1.2
        }
        this.body = Bodies.circle (x,y,radius,options);
        this.radius = radius;
        World.add (world,this.body);
    }
    display (){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }


} 