const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var Box1, Box2, Box3, Box4;

var Pig1, Pig2;
var Bird1;
var Log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Box1 = new Box (700,320,70,70); 
    Box2 = new Box (920,320,70,70);
    Box3 = new Box (700,240,70,70); 
    Box4 = new Box (920,240,70,70);

    Log1 = new Log (810,260,300,PI/2);

    Pig1 = new Pig (810,315);
    Pig2 = new Pig (810,220);

    ground = new Ground (600,height,1200,10);

    Bird1 = new Bird (100,100);

}

function draw(){
    background(0);
    Engine.update(engine);

    Box1.display(); 
    Box2.display();
    Box3.display();
    Box4.display();

    Pig1.display();
    Pig2.display();

    ground.display();

    Bird1.display();

    Log1.display();
   
}