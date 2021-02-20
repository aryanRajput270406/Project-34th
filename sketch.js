//Create variables here

var dog = createSprite();
dog.addImage(Dog.png);
var food = createSprite();
var foodStock = createSprite();
foodStock = database.ref(Food);
foodStock.on("value",readStock);

function preload()
{
	//load images here
  Dog.png;
  dogImg.png;
  dogImg1.png;
  happydog.png;
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
   writeStock(foodStock);
   dog.addImage(happydog.png);
  }

  drawSprites();
  //add styles here

  Text("Note: PRESS UP_ARROW TO FEED THE DOG",250,450);
  textSize(20);
  fill("WHITE");
  stroke("GREEN");

  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }
  }
   
  database.ref('/').update({
    Food:x
  })
}