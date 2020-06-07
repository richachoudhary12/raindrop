//create the variables
var raindropGroup;
var raindropGroup2;
var raindropGroup3;
var raindropGroup4;
var raindropGroup5;
var raindropGroup6;
var raindropGroup7;
var raindropImage;
function preload(){
  raindropImage = loadImage("raindrop.png");
}

function setup() {

  //set up the canvas
  createCanvas(790,400);

  //form the groups  of raindrops
raindropGroup = new Group();
raindropGroup2 = new Group();
raindropGroup3 = new Group();
raindropGroup4 = new Group();
raindropGroup5 = new Group();
raindropGroup6 = new Group();
raindropGroup7 = new Group();
}

function draw() {
  
  background("white");

  //spawn the raindrops
  spawnRainDrops1();
  spawnRainDrops2();
spawnRainDrops3();
spawnRainDrops4();
spawnRainDrops5();
spawnRainDrops6();
spawnRainDrops7();
  //display all the objects
  drawSprites();
}

function spawnRainDrops1(){
  if (frameCount%30 === 0){
rainDrop = createSprite(50,0,20,20);
rainDrop.addImage(raindropImage);
rainDrop.scale = 0.5;
rainDrop.velocityY = 4;
raindropGroup.add(rainDrop);
  }
}
  
function spawnRainDrops2 (){
  if (frameCount%40 === 0){
    rainDrop2 = createSprite(150,0,20,20);
    rainDrop2.addImage(raindropImage);
rainDrop2.scale = 0.5;
    rainDrop2.velocityY = 4;
    raindropGroup2.add(rainDrop2);
  }
}

function spawnRainDrops3 (){
  if (frameCount%35 === 0){
    rainDrop3 = createSprite(250,0,20,20);
    rainDrop3.addImage(raindropImage);
rainDrop3.scale = 0.5;
    rainDrop3.velocityY = 4;
    raindropGroup3.add(rainDrop3);
  }
}

function spawnRainDrops4 () {
  if (frameCount% 45 === 0){
    rainDrop4 = createSprite(350,0,20,20);
    rainDrop4.addImage(raindropImage);
rainDrop4.scale = 0.5;
    rainDrop4.velocityY = 4;
    raindropGroup4.add(rainDrop4);
  }
}

function spawnRainDrops5 (){
  if (frameCount%50 === 0){
    rainDrop5 = createSprite(450,0,20,20);
    rainDrop5.addImage(raindropImage);
rainDrop5.scale = 0.5;
    rainDrop5.velocityY = 4;
    raindropGroup5.add(rainDrop5);
  }
}

function spawnRainDrops6 (){
  if (frameCount%45 === 0){
    rainDrop6 = createSprite(550,0,20,20);
    rainDrop6.addImage(raindropImage);
rainDrop6.scale = 0.5;
    rainDrop6.velocityY = 4;
    raindropGroup6.add(rainDrop6);
  }
}

function spawnRainDrops7 (){
  if (frameCount%35 ===0){
    rainDrop7 = createSprite(650,0,20,20);
    rainDrop7.addImage(raindropImage);
rainDrop7.scale = 0.5;
    rainDrop7.velocityY = 4;
    raindropGroup7.add(rainDrop7);
  }
}