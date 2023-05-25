var x = 0;
var y = 0;
var destinoX = 350;
var destinoY = 200;
var easing = 0.05;

//Preguntar

//Obra de Paul Klee-Conquistador

function setup() {
  createCanvas(800, 800); //Tamaño de Lienzo
  background(255, 183, 21); //Color de Fondo
  angleMode(DEGREES);
}

function draw() {
  if (mouseIsPressed) {
    destinoX = mouseX;
    destinoY = mouseY;

    x += (destinoX - x) * easing;
    y += (destinoY - y) * easing;
  }

  push(); //CAPA

  //Circulo
  translate(100, 150);
  //ellipseMode(RADIUS);
  fill(255, 85, 0);
  noStroke();
  ellipse(destinoX, destinoY, 250, 150);

  pop();

  //Rectangulos
  rotate(6);
  fill(0);
  noStroke();
  rect(250, 170, 200, 206);
  rotate(4);
  fill(133, 97, 141);
  noStroke();
  rect(285, 279, 200, 75);
  rotate(6);
  fill(255, 183, 21);
  noStroke();
  rect(470, 195, 50, 105);

  //Círculo
  fill(255, 68, 0);
  ellipse(370, 160, 80, 80);

  //Rectángulo
  fill(0);
  rect(330, 115, 40, 100);

  //Ellipse
  fill(255, 153, 4);
  ellipse(370, 280, 50, 50);

  /*Triángulo
  fill(102, 86, 46);
  noStroke(0);
  triangle(700, 700, 400, 490,10, 520);*/

  //Rectángulo
  noStroke(0);
  fill(102, 86, 46);
  rect(170, 485, 50, 50);

  //Lineas
  stroke(255, 12, 0);
  line(315, 329, 600, 590);
  rotate(0);
  stroke(255, 12, 0);
  line(190, 500, 510, 399);
}
