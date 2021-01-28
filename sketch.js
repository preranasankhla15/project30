const Engine=Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

const Constraint=Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,b8,b9,b10,b11,b12,b13,b14,b15;
var polygon,slingshot,ground;

function preload() {
    polygon_img = loadImage("polygon.png");
}
function setup(){
    createCanvas(900,400);
    engine= Engine.create();
    world=engine.world;
    Engine.run(engine);
    
    ground=new Ground();

    stand1= new Stand(390,300,250,10);
    //stand2=new Stand(700,200,200,10);

    block1 = new Box(300, 275, 30, 40);
  
    block2 = new Box(330, 275, 30, 40);
    block3 = new Box(360, 275, 30, 40);
    block4 = new Box(390, 275, 30, 40);
    block5 = new Box(420, 275, 30, 40);
    block6 = new Box(450, 275, 30, 40);
    block7 = new Box(480, 275, 30, 40);
   
   
   
    b8= new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10= new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);
    b13= new Box(360,195,30,40);
    b14= new Box(390,195,30,40);
    b15= new Box(420,195,30,40);
    b16= new Box(390,155,30,40);
   
    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot=new SlingShot(this.polygon,{x:100,y:200});
}
function draw(){
    background("black");
    ground.display();
    stand1.display();
    //stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    slingshot.display();
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}