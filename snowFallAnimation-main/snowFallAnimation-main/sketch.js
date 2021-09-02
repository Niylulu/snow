const Bodies=Matter.Bodies;
const World =Matter.World;
const Engine=Matter.Engine;


var engine, world;
var bg;
var snow=[];
var sw=[];

function preload(){
bg=loadImage("bg.jpg");
}

function setup() {
  var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  
}


function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%5==0){
    snow.push(new Snow(random(0,800),-20,random(10,30)));
  }
for(var i=0;i<snow.length;i++){
  snow [i].display();
}

if(frameCount%5==0){
  sw.push(new Snow1(random(0,800),-20,random(10,30)));
}
for(var i=0;i<sw.length;i++){
sw [i].display();
}

}