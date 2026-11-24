// POLE POSITION
// TP 1 parte 2 - Abril Torres y Delfina Sanchez
let musicaFondo;
let juego;
let imagenFondoInicio;
let imagenFondo1, imagenFondo2, imagenFondo3;
let imagenFondoNitro1, imagenFondoNitro2, imagenFondoNitro3;
let imagenAuto, imagenAutoRival;
let fuenteTitulo;
let imagenesAutosRivales = [];
function preload() {
  imagenFondo1 = loadImage("fondo4.jpg");
  imagenFondo2 = loadImage("fondo5.jpg");
  imagenFondo3 = loadImage("fondo6.jpg");
  imagenFondoNitro1 = loadImage("fondo7.jpg");
imagenFondoNitro2 = loadImage("fondo8.jpg");
imagenFondoNitro3 = loadImage("fondo9.jpg");
imagenFondoInicio = loadImage("pantallainicio1.jpg");
  imagenAuto = loadImage("auto.png");
  fuenteTitulo = loadFont("fast99.ttf");
  imagenesAutosRivales[0] = loadImage("autorival.png");
  imagenesAutosRivales[1] = loadImage("autoverde.png");
  imagenesAutosRivales[2] = loadImage("autoazul.png");
}

function setup() {
  createCanvas(800, 400);
  musicaFondo = new Audio("sonidos/musica.mp3");
musicaFondo.loop = true;
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
