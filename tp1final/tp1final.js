//tpfinalparte1 - comision 4 - profesor: Leo Garay
// Alumnas: Delfina Sánchez y Abril Torres

function setup() {
createCanvas(800, 450);

}


let pantalla = -1;
let frames1 = [];
let frames2 = [];
let offsets = [0, 0, 0];
let imagenes = [];

const BTN_SI    = { x: 250, y: 300, w: 100, h: 50, label: "SI" };
const BTN_NO    = { x: 450, y: 300, w: 100, h: 50, label: "NO" };
const BTN_AUTO   = { x: 200, y: 150, w: 400, h: 250 };
const BTN_ACEPTAR = { x: 326, y:265, w:135, h:50, label: "aceptar"};
const BTN_CHETO  = { x: 211,   y: 238,   w: 56 ,   h: 80  };
const BTN_FEO  = { x: 586 ,   y: 248,   w: 60 ,   h: 80  };
const BTN_JUGAR  = { x: 300, y: 330, w: 200, h: 60, label: "JUGAR" };
const BTN_FENTANILO = { x: 350 , y: 117, w: 70, h:150};
const BTN_PUERTASECRETA = {x: 598 , y: 149, w:60, h: 80};
const BTN_REINICIAR = { x: 300, y: 233, w: 200, h: 60, label: "REINICIAR" };
function preload() {
  imagenes[0]  = loadImage("ypf.png");
  imagenes[1]  = loadImage("macriauto.png");
  imagenes[2]  = loadImage("macri_medialunas.png");
  imagenes[3]  = loadImage("robar.png");
  imagenes[4]  = loadImage("decision.png");
  imagenes[5]  = loadImage("macritriste.png");
  imagenes[6] = loadImage("macrivuelve.png");
  imagenes[7]  = loadImage("graciaspibe.png");
  imagenes[8] = loadImage("miami.jpeg");
  imagenes[9]  = loadImage("facebook.png");
  imagenes[10] = loadImage("boliche.png");
  imagenes[11] = loadImage("bolichecheto.png");
  imagenes[12] = loadImage("bolichefeo.png");
  imagenes[13] = loadImage("bolichericardo.png");
  imagenes[14] = loadImage("bolichefentanilo.png");
  imagenes[15] = loadImage("fentanilo.png");
  imagenes[16] = loadImage("poleposition.jpeg");
  imagenes[17] = loadImage("ganaste.jpeg");
  imagenes[18] = loadImage("perdiste.png");
  frames1[0] = loadImage("Personaje1.png");
  frames2[0] = loadImage("Personaje2.png");
  imagenes[19] = loadImage("poleposition2.jpeg");
   imagenes[20] = loadImage("poleposition3.jpeg");
   imagenes[21] = loadImage("carrera.jpeg");
  imagenes[22] = loadImage("carrera2.jpeg");
   imagenes[23] = loadImage("carrera3.jpeg");
   imagenes[24] = loadImage("ganastetrampa.jpeg");
}

function setup() {
  createCanvas(800, 450);
  textFont("monospace");
}


function draw() {
  if (pantalla == -1) {
    dibujarInicio();
  } else {
    mostrarFondo(pantalla);
    mostrarPantalla(pantalla);
  }

  if (pantalla == 4 && (dentroDe(BTN_SI) || dentroDe(BTN_NO))) {
    cursor(HAND);
  } else if (pantalla == 3 && dentroDe(BTN_AUTO)) {
    cursor(HAND);
  } else if (pantalla == 9 && dentroDe(BTN_ACEPTAR)) {
    cursor(HAND);
  } else if (pantalla == -1 && dentroDe(BTN_JUGAR)) {
    cursor(HAND);
  } else if (pantalla == 10 && (dentroDe(BTN_FEO) || dentroDe(BTN_CHETO))) {
    cursor(HAND);
  } else if (pantalla == 15 && dentroDe(BTN_FENTANILO) || dentroDe(BTN_PUERTASECRETA)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function dibujarInicio() {
  background(20, 80, 40);
  image(frames1[0], 0, 220, 280, 230);
  image(frames2[0], 520, 220, 280, 230);
  fill(255, 220, 50);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("MACRI SIMULATOR", 400, 100);
  fill(200);
  textSize(22);
  text("La historia de un hombre y su auto", 400, 170);
  dibujarBoton(BTN_JUGAR);
  textAlign(LEFT, BASELINE);
}
function dibujarBoton(btn) {
  let hover = dentroDe(btn);
  strokeWeight(2);
  stroke(180);
  fill(hover ? 255 : 220);
  rect(btn.x, btn.y, btn.w, btn.h, 8);
  noStroke();
  fill(hover ? 0 : 40);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
  textAlign(LEFT, BASELINE);
}
