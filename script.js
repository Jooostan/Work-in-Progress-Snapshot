let r1;
let r2;
let r3;
let r4;

function setup() {
  // restart();
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  frameRate(7)
}

function draw() {
  background('#99AFD6');
  translate(width / 2, height / 2);
  branch(random(80, 100));
  fill('#729872')
  rect(-(width/2), 218, width, height/2)
  person();
  bee()
  fill('black');
  // textSize(12)
  // text(mouseX - width / 2, mouseX - width /2 - 25, mouseY - height / 2);
  // text(mouseY - height / 2, mouseX - width /2 + 25, mouseY - height / 2);
  textSize(30)
  text('i am a seed', 200, 63)
  text('of something', 200, 93)
  text('beautiful', 200, 123)
}

function bee(){
  noCursor()
  let x = mouseX - width / 2;
  let y = mouseY - height / 2;
  fill('white')
  ellipse(x - 20, y + 5, 25, 10);
  ellipse(x - 20, y, 25, 10);
  fill('black')
  ellipse(x - 15, y + 20, 15, 15);
  fill('yellow')
  ellipse(x - 12, y + 8, 20, 22);
  fill('black')
  ellipse(x, y, 15, 20)
}


function branch(len){
  push();
  if(len > 10){
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(random(-20, -30));
    branch(len * random(0.7, 0.9));
    rotate(random(50, 60));
    branch(len * random(0.7, 0.9));
  }
  else{
    var R = random(0, 80) + random(-20, 20);
    var G = random(0, 120) + random(-20, 20);
    var B = random(0, 40) + random(-20, 20);
    fill(R, G, B);
    ellipse(0, 0, 10, 15);
  }
  pop();
}

function person(){
  noStroke();
  // tree
  fill(70, 40, 20);
  ellipse(0, 7.5, 100, 100)
  ellipse(-5, 30, 100, 100)
  ellipse(35, 47.5, 50, 130)
  ellipse(40, 95, 60, 100)
  ellipse(-35, 95, 60, 100)
  ellipse(-50, 110, 40, 100)
  ellipse(-59, 160, 40, 100)
  ellipse(-55, 180, 70, 120)
  ellipse(50, 125, 70, 100)
  ellipse(80, 160, 70, 90)
  ellipse(15, 219, 180, 70)
  ellipse(95, 190, 50, 75)
  
  // person
  fill('#C0A972');
  ellipse(-33, 16, 20, 30);  // left ear
  ellipse(33, 12, 25, 35);   // right ear
  ellipse(0, 0, 70, 70);     // head - top
  ellipse(-0.5, 25, 65, 65); // head - bottom
  ellipse(-5, 70, 80, 40);   // collar bone area
  ellipse(35, 80, 50, 40);   // right shoulder
  ellipse(-2.5, 130, 100, 120); // main body
  ellipse(-36, 80, 30, 40);  // left shoulder
  ellipse(48, 110, 40, 80);  // right arm
  ellipse(55, 135, 30, 70);  // right elbow
  ellipse(30, 180, 70, 70);  // butt
  ellipse(5, 195, 100, 70);  // more butt
  ellipse(-42, 100, 40, 60); // left shoulder pt2
  ellipse(-44, 138, 40, 80); // left elbow
  ellipse(-30, 160, 50, 110); // left leg
  ellipse(-30, 205, 40, 60); // left ankle
  ellipse(7.5, 160, 50, 110); // right leg
  ellipse(7.5, 205, 40, 60); // right ankle
  ellipse(-33, 240, 30, 25);
  ellipse(-33, 246, 32, 25);
  ellipse(-33, 252, 34, 25);
  ellipse(-33, 258, 36, 25); 
  ellipse(8, 240, 30, 25);
  ellipse(8, 246, 32, 25);
  ellipse(8, 252, 34, 25);
  ellipse(8, 258, 36, 25);
  
  fill('black')
  ellipse(-20, 12.5, 10, 10)
  ellipse(15, 12.5, 10, 10)
  ellipse(-3, 35, 20, 10)
  fill('#C0A972')
  ellipse(-20, 8.5, 15, 10)
  ellipse(15, 8.5, 15, 10)
  ellipse(-3, 31, 25, 10)
  
}

function restart(){
  // noLoop();
  // r1 = random(-20, -30);
  // r2 = random(0.7, 0.9);
  // r3 = random(50, 60);
  // r4 = random(0.7, 0.9);
  // draw();
}

function mouseClicked() {
  // restart();
}