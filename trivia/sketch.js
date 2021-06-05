var bgImg
var form,game,player
var database

function preload(){
bgImg = loadImage('images/back.jpeg')
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  //createSprite(400, 200, 50, 50);

  form = new Form()
}


function draw() {
  background(bgImg);  
  //drawSprites();
  form.display();
}