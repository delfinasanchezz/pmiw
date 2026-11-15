
//tpfinalparte1 recuperatorio - comision 4 - profesor: Leo Garay
// Alumnas: Delfina Sánchez y Abril Torres
// video explicativo: https://youtu.be/TB8yr5vKt_k?si=FKlHJ1nnrk_odtQX !!!!
let miFuente2;
let miFuente3;
let miFuente4;
let pantalla = -1;
let imagenes = [];
let imgInicio;
let musicaFondo;
let musicaIniciada = false;

// pantalla 25: creditos que van subiendo
let lineasCreditos = [
  "CRÉDITOS",
  "",
  "pole position: bizarre",
  "",
  "Alumnas",
  "Delfina Sánchez y Abril Torres",
  "",
  "Autores",
  "Delfina Sánchez y Abril Torres",
  "",
  "Docente",
  "Leo Garay - Comisión 4",
  "",
  "¡Gracias por jugar!"
];
let inicioCreditos = 0;

const velocidadCreditos = 0.05;
const espacioLineas = 40;

// texto de cada pantalla (la posicion es el numero de pantalla)
let textos = [
  "Trabajás en una estación de servicio YPF.",                                                       // 0
  "Macri tiene un auto deportivo increíble...",                                                      // 1
  "Macri se va a comprar medialunas.",                                                               // 2
  "El auto de Macri quedó solo...",                                                                  // 3
  "¿Qué vas a hacer? ¿Robar el auto?",                                                               // 4
  "Te das a la fuga hasta México. Macri está enojado.",                                              // 5
  "Macri vuelve después de unos días.",                                                              // 6
  "Macri te dice: \"¡Gracias, pibe!\" y se va.",                                                     // 7
  "Llegás a Miami y encontrás por Facebook una publicación\npara competir en una carrera.",          // 8
  "¿Aceptás participar en la carrera?",                                                              // 9
  "Antes de la carrera querés salir de joda, tenés dos opciones.",                                   // 10
  "Caés a una joda y te encontrás al mismísimo...",                                                  // 11
  "Caés a una joda y te encontrás a la mismísima...",                                                // 12
  "Ricardo Fort, que te dice: \"Vamos, pibe, bailás bien, quedate toda\nla noche conmigo\".",        // 13
  "Mirtha Legrand, que te dice: \"La noche es joven... te puedo ofrecer\nlo que tomé yo para aguantar tanto tiempo\".", // 14
  "Te ofrece una misteriosa medicina...",                                                            // 15
  "En un flash se hace hora de la carrera, esperás a que den las\nluces para acelerar.",             // 16
  "FINAL: Ganaste la carrera con total honestidad. ¡Sos un campeón!",                                // 17
  "FINAL: Perdiste. El fentanilo te dejó fuera de carrera...",                                       // 18
  "No sabés cómo, pero se hace hora de la carrera, esperás a que\nden las luces para acelerar.",     // 19
  "Descansaste, se hace hora de la carrera, esperás a que den\nlas luces para acelerar.",            // 20
  "El fentanilo que te ofreció Mirtha empieza a hacer efecto, se\nte duermen las piernas y chocás.", // 21
  "Estás con mucha resaca y no podés terminar la carrera.",                                          // 22
  "Evitaste todas las distracciones e hiciste una carrera estupenda.",                               // 23
  "FINAL: No importa, Ricardo compró el primer lugar y terminaste\nganando. ¡Bailás muy bien!"       // 24
];

// a que pantalla se pasa con un click (-1 = hay que elegir con un boton)
let siguiente = [1, 2, 3, -1, -1, 8, 3, 6, 9, -1, -1, 13, 14, 16, 15, -1, 22, -1, -1, 21, 23, 18, 24, 17, -1, -1];

const BTN_SI    = { x: 250, y: 300, w: 100, h: 50, label: "SI" };
const BTN_NO    = { x: 450, y: 300, w: 100, h: 50, label: "NO" };
const BTN_AUTO   = { x: 200, y: 150, w: 400, h: 250 };
const BTN_ACEPTAR = { x: 326, y:265, w:135, h:50, label: "aceptar"};
const BTN_CHETO  = { x: 211,   y: 238,   w: 56 ,   h: 80  };
const BTN_FEO  = { x: 586 ,   y: 248,   w: 60 ,   h: 80  };
const BTN_JUGAR  = { x: 300, y: 130, w: 200, h: 60, label: "JUGAR" };
const BTN_FENTANILO = { x: 350 , y: 117, w: 70, h:150};
const BTN_PUERTASECRETA = {x: 598 , y: 149, w:60, h: 80};
const BTN_CREDITOS = { x: 600, y: 20, w: 180, h: 50, label: "CREDITOS" };
const BTN_REINICIAR = { x: 300, y: 380, w: 200, h: 50, label: "REINICIAR" };

function preload() {
  miFuente2 = loadFont("data/FrescoStamp.ttf");
  miFuente3 = loadFont("data/Anton-Regular.ttf");
  miFuente4 = loadFont("data/OpenSans-Regular.ttf");
  imagenes[0]  = loadImage("ypf.jpg");
  imagenes[1]  = loadImage("macriauto.jpg");
  imagenes[2]  = loadImage("macri_medialunas.jpg");
  imagenes[3]  = loadImage("robar.jpg");
  imagenes[4]  = loadImage("decision.jpg");
  imagenes[5]  = loadImage("macritriste.jpg");
  imagenes[6]  = loadImage("macrivuelve.jpg");
  imagenes[7]  = loadImage("graciaspibe.jpg");
  imagenes[8]  = loadImage("miami.jpeg");
  imagenes[9]  = loadImage("facebook.jpg");
  imagenes[10] = loadImage("boliche.jpg");
  imagenes[11] = loadImage("bolichecheto.jpg");
  imagenes[12] = loadImage("bolichefeo.jpg");
  imagenes[13] = loadImage("bolichericardo.jpg");
  imagenes[14] = loadImage("bolichefentanilo.jpg");
  imagenes[15] = loadImage("fentanilo.jpg");
  imagenes[16] = loadImage("poleposition.jpeg");
  imagenes[17] = loadImage("ganaste.jpeg");
  imagenes[18] = loadImage("perdiste.jpg");
  imagenes[19] = loadImage("poleposition2.jpeg");
  imagenes[20] = loadImage("poleposition3.jpeg");
  imagenes[21] = loadImage("carrera.jpeg");
  imagenes[22] = loadImage("carrera2.jpeg");
  imagenes[23] = loadImage("carrera3.jpeg");
  imagenes[24] = loadImage("ganastetrampa.jpeg");
  imgInicio = loadImage("inicio.png");
  musicaFondo = loadSound("sonidos/musica.mp3");
}

function setup() {
  createCanvas(800, 450);
}

function keyPressed() {
  iniciarMusica(musicaFondo, 0.3);
}

function draw() {
  if (pantalla == -1) {
    dibujarInicio();
  } else if (pantalla == 25) {
    mostrarCreditos();
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
  } else if (pantalla == 15 && (dentroDe(BTN_FENTANILO) || dentroDe(BTN_PUERTASECRETA))) {
    cursor(HAND);
  } else if (esFinal(pantalla) && dentroDe(BTN_CREDITOS)) {
    cursor(HAND);
  } else if (pantalla == 25 && dentroDe(BTN_REINICIAR)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  iniciarMusica(musicaFondo, 0.3);
}

function mouseClicked() {
  procesarClick();
}
