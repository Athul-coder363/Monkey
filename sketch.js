var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
// createCanvas(600, 600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x) 
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
}


function draw() {
background("white");
  if(keyDown("space")&&monkey.y>=100){
     monkey.velocityY=-12;
     }
   monkey.velocityY+=0.8;
  if(ground.x<0)
    {
      ground.x=ground.width/2;
    }
  monkey.collide(ground);
 Banana();
//  console.log(banana)
  Obstacles();
  drawSprites();
}
function Banana(){
  if(World.frameCount%80===0){
     banana=createSprite(400,200,20,20);
     banana.addImage(bananaImage);
     banana.scale=0.1;
    banana.y =Math.round(random(70,200));
    banana.lifetime=80;
    banana.velocityX=-5;
    FoodGroup.add(banana);
     }
}
function Obstacles(){
  if(World.frameCount%80===0){
     obstacle=createSprite(400,315,20,20);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.2;
   // r=Math.round(random(120,200));
    obstacle.lifetime=80;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
     }
}

