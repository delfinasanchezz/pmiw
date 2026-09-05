//tp1 Delfina Sanchez Legajo 125684/2
let framesOjos = []; 
 
const N_FRAMES = 3; 
const VELOCIDAD_ANIMACION = 17; 
 
let estadoActual = 0; 
 
function preload() {

  let imagenes = [];

  for (let i = 0; i < N_FRAMES; i++) {
    imagenes.push(loadImage("images/ojos_" + (i + 1) + ".png"));
  }

  framesOjos.push(imagenes[0]); // abiertos
  framesOjos.push(imagenes[1]); // cerrándose
  framesOjos.push(imagenes[2]); // cerrados
  framesOjos.push(imagenes[2]); // cerrados x2
  framesOjos.push(imagenes[1]); // cerrándose
  framesOjos.push(imagenes[0]); // abiertos
}
 
function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}
 
function draw() { 
 
  background(0); 
 
  // Máquina de estados 
  if (estadoActual === 0) { 
 
    // Estado quieto 
    let frame = elegirFrame(framesOjos, VELOCIDAD_ANIMACION); 
    image(frame, 400, 300); 
 
  } else if (estadoActual === 1) { 
 
    // Estado volando 
    let frame = elegirFrame(framesOjos, VELOCIDAD_ANIMACION); 
    image(frame, 400, 300); 
  } 
} 
 
function elegirFrame(frames, velocidadAnimacion) { 
 
  let indice = floor(frameCount / velocidadAnimacion) % frames.length; 
 
  return frames[indice]; 
}
