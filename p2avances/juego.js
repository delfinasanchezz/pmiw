class Juego {
  constructor() {
    this.fondo = new Fondo();
    this.jugador = new Jugador();
    this.autos = [];

    this.tiempoUltimoAuto = 0;
    this.intervaloAutos = 3000;

    this.estado = "inicio";
    this.duracion = 30;
    this.inicioPartida = 0;
  }

  actualizar() {
    if (this.estado != "jugando") return;

    this.fondo.actualizar();
    this.generarAuto();

    let acelerando = keyIsDown(UP_ARROW);

    for (let auto of this.autos) {
      auto.actualizar(acelerando);

      if (auto.colisionaCon(this.jugador)) {
        this.estado = "perdiste";
      }
    }

    // saco los autos que ya pasaron
    for (let i = this.autos.length - 1; i >= 0; i--) {
      if (this.autos[i].terminado) {
        this.autos.splice(i, 1);
      }
    }

    let tiempoTranscurrido = (millis() - this.inicioPartida) / 1000;

    if (tiempoTranscurrido >= this.duracion) {
      this.estado = "ganaste";
    }
  }

  generarAuto() {
    if (millis() - this.tiempoUltimoAuto > this.intervaloAutos) {
      let carrilAleatorio = floor(random(0, 3));
      this.autos.push(new AutoRival(carrilAleatorio));

      this.tiempoUltimoAuto = millis();
      this.intervaloAutos = random(2500, 4000);
    }
  }

  mostrar() {
    if (this.estado == "inicio") {
      this.mostrarPantallaInicio();
    } else if (this.estado == "jugando") {
      this.mostrarPantallaJuego();
    } else if (this.estado == "perdiste") {
      this.mostrarPantallaPerdiste();
    } else if (this.estado == "ganaste") {
      this.mostrarPantallaGanaste();
    } else if (this.estado == "creditos") {
      this.mostrarPantallaCreditos();
    }
  }

  mostrarPantallaInicio() {
    background(20);
    fill(255);
    textAlign(CENTER, CENTER);

    textFont(fuenteTitulo);
    textSize(38);
    text("POLE POSITION", width / 2, 90);

    textFont("sans-serif");
    textSize(20);
    text("INSTRUCCIONES", width / 2, 160);
    textSize(16);
    text("Esquivá los autos rivales que aparecen en la carretera.", width / 2, 205);
    text("IZQUIERDA / DERECHA para moverte y ARRIBA para acelerar.", width / 2, 235);
    text("Sobreviví durante 30 segundos para ganar.", width / 2, 265);

    this.dibujarBoton("JUGAR", width / 2 - 75, 310, 150, 45);
    this.dibujarBoton("CRÉDITOS", width / 2 - 75, 365, 150, 40);
  }

  mostrarPantallaJuego() {
    this.fondo.mostrar();

    for (let auto of this.autos) {
      auto.mostrar();
    }

    this.jugador.mostrar();

    let transcurrido = (millis() - this.inicioPartida) / 1000;
    let restante = max(0, ceil(this.duracion - transcurrido));

    fill(0, 180);
    noStroke();
    rect(10, 10, 250, 40);

    fill(255);
    textAlign(LEFT, CENTER);
    textSize(18);
    text("Tiempo: " + restante + " s", 20, 30);

    if (keyIsDown(UP_ARROW)) {
      textAlign(RIGHT, CENTER);
      textSize(15);
      text("NITRO", 245, 30);
    }
  }

  mostrarPantallaPerdiste() {
    background(10, 20, 25);
    fill(255, 50, 50);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("¡CHOCASTE!", width / 2, 140);

    fill(255);
    textSize(20);
    text("Un auto rival te alcanzó.", width / 2, 200);

    this.dibujarBoton("REINTENTAR", width / 2 - 90, 260, 180, 50);
    this.dibujarBoton("CRÉDITOS", width / 2 - 75, 325, 150, 40);
  }

  mostrarPantallaGanaste() {
    background(10, 20, 25);
    fill(100, 255, 100);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("¡GANASTE!", width / 2, 150);

    fill(255);
    textSize(20);
    text("¡Sobreviviste a la carrera!", width / 2, 205);

    this.dibujarBoton("JUGAR DE NUEVO", width / 2 - 100, 260, 200, 50);
    this.dibujarBoton("CRÉDITOS", width / 2 - 75, 325, 150, 40);
  }

  mostrarPantallaCreditos() {
    background(20);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(35);
    text("CRÉDITOS", width / 2, 100);

    textSize(18);
    text("POLE POSITION", width / 2, 170);
    textSize(16);
    text("Alumnas: Abril Torres y Delfina Sanchez", width / 2, 220);
    text("Video Juego Web Etapa 2", width / 2, 250);

    this.dibujarBoton("VOLVER", width / 2 - 75, 310, 150, 45);
  }

  dibujarBoton(texto, x, y, ancho, alto) {
    rectMode(CORNER);
    noStroke();
    fill(80);
    rect(x, y, ancho, alto);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(texto, x + ancho / 2, y + alto / 2);
  }

  teclaPresionada(tecla) {
    if (this.estado == "jugando") {
      this.jugador.mover(tecla);
    }
  }

  mousePresionado(x, y) {
    if (this.estado == "inicio") {
      if (x > width / 2 - 75 && x < width / 2 + 75 && y > 310 && y < 355) {
        this.iniciarPartida();
      } else if (x > width / 2 - 75 && x < width / 2 + 75 && y > 365 && y < 405) {
        this.estado = "creditos";
      }
    } else if (this.estado == "perdiste" || this.estado == "ganaste") {
      if (x > width / 2 - 100 && x < width / 2 + 100 && y > 260 && y < 310) {
        this.iniciarPartida();
      } else if (x > width / 2 - 75 && x < width / 2 + 75 && y > 325 && y < 365) {
        this.estado = "creditos";
      }
    } else if (this.estado == "creditos") {
      if (x > width / 2 - 75 && x < width / 2 + 75 && y > 310 && y < 355) {
        this.estado = "inicio";
      }
    }
  }

  iniciarPartida() {
    this.fondo.reiniciar();
    this.jugador.reiniciar();
    this.autos = [];

    this.inicioPartida = millis();
    this.tiempoUltimoAuto = millis();
    this.intervaloAutos = 2500;
    this.estado = "jugando";
  }

  reiniciar() {
    this.fondo.reiniciar();
    this.jugador.reiniciar();
    this.autos = [];
    this.estado = "inicio";
  }
}
