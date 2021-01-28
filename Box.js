class Box {
    constructor(x, y, width, height) {
        var options={
            restitution : 0.4,
            friction : 0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.Visiblity=225;
    }
    display(){
        if(this.body.speed<3){
            
       
       var angle=this.body.angle;
        var pos=this.body.position;
        push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0, 0, this.width, this.height);
       pop();
        }
        else{
            push();
            tint(225,this.Visiblity);
            this.Visiblity=this.Visiblity-5;
            World.remove(world,this.body);
            pop();
        }
       
    }



};
