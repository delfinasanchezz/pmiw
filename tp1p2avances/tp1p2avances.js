// POLE POSITION
// TP 1 parte 2 - Abril Torres y Delfina Sanchez

let juego;

let imagenFondo1, imagenFondo2, imagenFondo3;
let imagenAuto, imagenAutoRival;
let fuenteTitulo;

function preload() {
  imagenFondo1 = loadImage("fondo1.jpg");
  imagenFondo2 = loadImage("fondo2.jpg");
  imagenFondo3 = loadImage("fondo3.jpg");

  imagenAuto = loadImage("auto.png");
  imagenAutoRival = loadImage("autorival.png");
  fuenteTitulo = loadFont("fast99.ttf");
}

function setup() {
  createCanvas(800, 450);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.mostrar();
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}

function mousePressed() {
  juego.mousePresionado(mouseX, mouseY);
}