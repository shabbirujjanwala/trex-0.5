var trex,trex_running;
var ground,ground_image;
var edge;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image=loadImage("ground2.png")
}
function setup(){
createCanvas(600,200);
//create a trex sprite
trex=createSprite(50,180,20,50);
trex.addAnimation("running",trex_running);
trex.scale=0.5;
trex.x=50;

// create ground sprite
ground=createSprite(200,180,400,20);
ground.addImage("ground",ground_image);
ground.velocityX=-2;

edge=createEdgeSprites();
}
function draw(){
background(220);

//jumping the trex on space key press
if(keyDown("space")){
  trex.velocityY=-10;
}
if(ground.x<0){
  ground.x=ground.width/2;
}
//adding gravity
trex.velocityY=trex.velocityY+0.8;

trex.collide(ground);
drawSprites();
}