// historia

function procesarClick() {
  if (pantalla == -1) {
    if (dentroDe(BTN_JUGAR)) {
      pantalla = 0;
    }
  } else if (siguiente[pantalla] != -1) {
    pantalla = siguiente[pantalla];
  } else if (pantalla == 3) {
    if (dentroDe(BTN_AUTO)) pantalla = 4;
  } else if (pantalla == 4) {
    if (dentroDe(BTN_SI)) pantalla = 5;
    else if (dentroDe(BTN_NO)) pantalla = 7;
  } else if (pantalla == 9) {
    if (dentroDe(BTN_ACEPTAR)) pantalla = 10;
  } else if (pantalla == 10) {
    if (dentroDe(BTN_CHETO)) pantalla = 11;
    else if (dentroDe(BTN_FEO)) pantalla = 12;
  } else if (pantalla == 15) {
    if (dentroDe(BTN_FENTANILO)) pantalla = 19;
    else if (dentroDe(BTN_PUERTASECRETA)) pantalla = 20;
  } else if (esFinal(pantalla)) {
    if (dentroDe(BTN_CREDITOS)) irACreditos();
  } else if (pantalla == 25) {
    if (dentroDe(BTN_REINICIAR)) reiniciar();
  }
}

// los 3 finales
function esFinal(p) {
  return p == 17 || p == 18 || p == 24;
}

function irACreditos() {
  pantalla = 25;
  inicioCreditos = millis();
}

// vuelve a la pantalla de inicio
function reiniciar() {
  pantalla = -1;
}

function mostrarPantalla(p) {
  // zona clickeable
  if (p == 3) {
    dibujarZona(BTN_AUTO);
  } else if (p == 10) {
    dibujarZona(BTN_CHETO);
    dibujarZona(BTN_FEO);
  } else if (p == 15) {
    dibujarZona(BTN_FENTANILO);
    dibujarZona(BTN_PUERTASECRETA);
  }

  mostrarTexto(textos[p]);

  if (p == 4) {
    mostrarBotonesSiNo();
  } else if (p == 9) {
    mostrarBoton(BTN_ACEPTAR);
  } else if (esFinal(p)) {
    dibujarBoton(BTN_CREDITOS);
  }
}

// pantalla de creditos

function mostrarCreditos() {
  background(135, 206, 235);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(0, 47, 130);

  for (let i = 0; i < lineasCreditos.length; i++) {
    if (i == 0) {
      textFont(miFuente3);
      textSize(40);
    } else {
      textFont(miFuente4);
      textSize(22);
    }
    text(lineasCreditos[i], width / 2, posicionLinea(i));
  }

  // cuando la ultima linea sale por arriba, empiezan de nuevo
  if (posicionLinea(lineasCreditos.length - 1) < -espacioLineas) {
    inicioCreditos = millis();
  }

  // franja de abajo para que el texto pase por detras del boton
  fill(135, 206, 235);
  rect(0, 365, width, 85);
  dibujarBoton(BTN_REINICIAR);
}

// devuelve la altura de cada linea: con el tiempo van subiendo
function posicionLinea(i) {
  return 380 + i * espacioLineas - (millis() - inicioCreditos) * velocidadCreditos;
}

function mostrarFondo(numero) {
  background(0);
  image(imagenes[numero], 0, 0, 800, 450);
}

function mostrarTexto(texto) {
  fill(0);
  rect(29, 368, 740, 70);

  fill(255);
  textFont(miFuente4);
  textSize(20);
  textAlign(LEFT, TOP);
  text(texto, 35, 375);
}

// se ilumina cuando pasa el mouse
function dibujarZona(zona) {
  if (dentroDe(zona)) {
    noStroke();
    fill(255, 255, 255, 70);
    rect(zona.x, zona.y, zona.w, zona.h);
  }
}

// botones

function dentroDe(btn) {
  return mouseX > btn.x && mouseX < btn.x + btn.w &&
         mouseY > btn.y && mouseY < btn.y + btn.h;
}

// botones azules (JUGAR, CREDITOS y REINICIAR)
function dibujarBoton(btn) {
  let hover = dentroDe(btn);
  strokeWeight(2);
  stroke(180);
  if (hover) {
    fill(0, 47, 130);
  } else {
    fill(79, 92, 182);
  }
  rect(btn.x, btn.y, btn.w, btn.h, 8);

  noStroke();
  fill(255);
  textFont(miFuente2);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

// botones de la historia (SI, NO, aceptar)
function mostrarBoton(btn) {
  fill(255);
  rect(btn.x, btn.y, btn.w, btn.h);
  fill(0);

  textFont(miFuente4);
  textSize(20);
  textAlign(CENTER, CENTER);
  let cx = btn.x + btn.w / 2;
  let cy = btn.y + btn.h / 2;
  text(btn.label, cx, cy);
}

function mostrarBotonesSiNo() {
  mostrarBoton(BTN_SI);
  mostrarBoton(BTN_NO);
}

// pantalla de inicio

function dibujarInicio() {
  background(173, 230, 238);

  let anchoFondo = 800;
  let altoFondo = anchoFondo * imgInicio.height / imgInicio.width;
  image(imgInicio, 0, height - altoFondo + 40, anchoFondo, altoFondo);

  textFont(miFuente3);
  textSize(42);
  textAlign(CENTER, CENTER);
  stroke(0, 47, 130);
  strokeWeight(2);
  fill(255);
  text("pole position: bizarre", width / 2, 45);
  noStroke();

  dibujarBoton(BTN_JUGAR);
}

// musica

function iniciarMusica(sonido, volumen) {
  if (!musicaIniciada) {
    sonido.setVolume(volumen);
    sonido.loop();
    musicaIniciada = true;
  }
}
