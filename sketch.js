const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bullet;

var zombies = [];
var superzombies = [];
var maxzombies = 5;

var level = 1;

var superzombie;
var superzombieImg;

var score = 0;


var survivor;
var survivorImg;
var bg1,bg2,bg3;
var x = 0.1;
var y = 0.1;


function preload(){
  bg1 = loadImage("level1.jpg");
 // bg2 = loadImage();
 bg3 = loadImage("level3.jpg");


  survivorImg = loadImage("survivor.png");
 zombies = loadImage("zombie.png");
  superzombies = loadImage("superzombie.jpg")
}


function setup() {
    canvas = createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;
   

  survivor = createSprite(600,400,20,20);
  survivor.addImage(survivorImg);
  survivor.scale = 0.15;


 
 

}



function draw() {
Engine.update(engine);

textSize(25);
fill ("yellow");
text("score:"+score, 100,50);

/*if(zombies.isTouching(bullet)){
  score = score+5;
  zombies.destroy();
}*/

if(level === 1){
  background(bg1);
  score = 0;
  if(score === 200){
    level = 2;
  }
}

if(level === 2){
  background(bg2);
  score = 0;
  if(score === 500){
    level = 3;
  }
}

if(level === 3){
  background(bg3);
  score = 0;
  if(score === 1000){
    zombies.destroyEach();
    textSize(25);
    text("You Escaped The Horde!");
  }
}






if(frameCount%50 === 0){
  for(var i = 0; i < maxzombies; i++){
    zombies.push(new Zombie(random(0,10), random(0, 10)));
  }
}

if(frameCount%50 === 0){
 for(var i = 0; i < maxzombies; i++){
   superzombies.push(new Superzombie(random(0,400), random(0, 400)));
 }
}


if(keyDown (LEFT_ARROW)){
 survivor.velocityX = survivor.velocityX - x
}

if(keyDown (RIGHT_ARROW)){
    survivor.velocityX = survivor.velocityX + x
}

if(keyDown (UP_ARROW)){
    survivor.velocityY = survivor.velocityY - y
}

if(keyDown (DOWN_ARROW)){
    survivor.velocityY = survivor.velocityY + y
}







for(var i = 0; i< maxzombies; i++){
  zombies[i].display();
  zombies[i].updateY();
  superzombies[i].display();
  superzombies[i].updateY();
}


  

  //  spawnZombies();
    spawnBullet();
 //   spawnSuperZombies();
    drawSprites();

   
   
}

/*function spawnZombies() {
   
    if (frameCount % 90 === 0) {
       zombie1 = createSprite(0,120,60,60);
      zombie1.addImage(zombieImg);
      zombie1.scale = 0.15;
      zombie1.y = Math.round(random(250,350));
      zombie1.velocityX = 3;
      zombieGroup.add(zombie1);
      if(bullet.isTouching(zombie1)){
        score = score+5;
        //zombie.destroy();
      }
    }

    if (frameCount % 130 === 0) {
       zombie2 = createSprite(1500,120,60,60);
      zombie2.addImage(zombieImg);
      zombie2.scale = 0.15;
      zombie2.y = Math.round(random(250,350));
      zombie2.velocityX = -3;
      zombieGroup.add(zombie2);
    }

    if (frameCount % 100 === 0) {
       zombie3 = createSprite(1500,0,60,60);
      zombie3.addImage(zombieImg);
      zombie3.scale = 0.15;
      zombie3.x = Math.round(random(650,750));
      zombie3.velocityY = 3;
      zombieGroup.add(zombie3);
    }

    if (frameCount % 98 === 0) {
       zombie4 = createSprite(1500,700,60,60);
      zombie4.addImage(zombieImg);
      zombie4.scale = 0.15;
      zombie4.x = Math.round(random(650,750));
      zombie4.velocityY = -3;
      zombieGroup.add(zombie4);
    }


  }

  function spawnSuperZombies() {
   
    if (frameCount % 1000 === 0) {
      var superzombie = createSprite(0,120,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.y = Math.round(random(200,300));
      superzombie.velocityX = 2;
    }

    if (frameCount % 1300 === 0) {
      var superzombie = createSprite(1500,120,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.y = Math.round(random(250,350));
      superzombie.velocityX = -2;
    }

    if (frameCount % 800 === 0) {
      var superzombie = createSprite(1500,0,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.x = Math.round(random(650,750));
      superzombie.velocityY = 2;
    }

    if (frameCount % 900 === 0) {
      var superzombie = createSprite(1500,700,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.x = Math.round(random(650,750));
      superzombie.velocityY = -2;
    }
    }*/

    function spawnBullet(){

if(keyWentDown("SPACE")){
   bullet = createSprite(survivor.x, survivor.y, 10,2);
  bullet.velocityX = 2;
  bullet.shapeColor = "yellow"
}
    }
  
