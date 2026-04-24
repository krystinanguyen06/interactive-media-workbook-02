function setup() {
  createCanvas(400,400);
}

function draw() {
  background(64, 64, 255);

  // HAIR
  drawHair();

  // NECK
  drawNeck();

  // LEFT EAR
  fill(173, 107, 81);
  ellipse(110, 200, 50, 70);

  // RIGHT EAR
  fill(173, 107, 81);
  ellipse(290, 200, 50, 70);

  // LEFT EARRINGS
  fill(174, 215, 255);
  ellipse(105, 235, 25, 25);

  // RIGHT EARRINGS
  ellipse(295, 235, 25, 25);

  // FACE
  fill(201, 156, 125);
  ellipse(200, 200, 190, 230);

  drawBangs();

  // NOSE
  fill(173, 107, 81);
  triangle(200, 180, 190, 230, 225, 240);
  
  // EYES
  drawEye(160, 180);
  drawEye(240, 180);

  // MOUTH
  fill(161, 34, 44);
  ellipse(200, 270, 55, 30);
  }

function drawEye(x, y) {
  // THE WHITE OF THE EYE
  fill(255);
  noStroke();
  ellipse(x, y, 55, 35);

  // EYES TO CURSOR
  let dx = mouseX - x;
  let dy = mouseY - y;

  // MOVEMENT LIMIT
  let maxDist = 4;

  let d = sqrt(dx * dx + dy * dy);

  if (d > maxDist) {
    dx = dx / d * maxDist;
    dy = dy / d * maxDist;
  }

  // PUPIL
  fill(0);
  ellipse(x + dx, y + dy, 25, 25);

  // HIGHLIGHT
  fill(255);
  ellipse(x + dx, y + dy, 5, 10);
}

function drawBangs() {
  fill(73, 52, 49); 
  rect(100, 85, 200, 65);
}

function drawHair() {
  fill(73, 52, 49); 
  rect(75, 70, 250, 280, 60);
}

function drawNeck() {
  fill(173, 107, 81);
  rect(170, 300, 60, 50);
}


