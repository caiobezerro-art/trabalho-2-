let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(220);
  console.log(mouseX,x)
  circle(x,y,10);
  
  if(mouseX == x){
    text('Encontrei!',200,200);
  }
}