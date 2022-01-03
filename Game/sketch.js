var gun,gunImg;
var bg;
var bullet,bulletImg;
var virus,virusImg;

function preload(){
  bg=loadImage("bg.png");
  gunImg=loadImage("gun1.png");
  bulletImg = loadImage("bullet1.png");
  virusImg=loadImage("virus.png");
}

function setup() {
  createCanvas(800,400);
  gun=createSprite(100, height/2, 50,50);
  gun.addImage(gunImg);
  gun.scale=0.18;
  
  bulletGroup = createGroup();
  virusGroup = createGroup();  
}

function draw() {
  background(bg);
  
  gun.y=mouseY;

  if(keyDown("space")){
    shootBullet();
  } 
  if (frameCount % 80 === 0) {
    drawvirus();
  }

  if(virusGroup.collide(bulletGroup)){
    handleVirusCollision(virusGroup);
  }

  drawSprites();
}
function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function drawvirus(){
  virus = createSprite(800,random(20,780),40,40);
  virus.velocityX = -8;
  virus.addImage(virusImg);
  virus.scale = 0.1
  virus.lifetime = 400;
  virusGroup.add(virus);
}
function handleVirusCollision(virusGroup){
 
  bulletGroup.destroyEach();
  bulletGroup.destroyEach();
  virusGroup.destroyEach();
}