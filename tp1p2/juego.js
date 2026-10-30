class Juego {
  constructor() {
    this.fondo = new Fondo();
    this.jugador = new Jugador();

  //lista de jeringas
    this.jeringas = [];

//estados
    this.estado = "inicio";

   // control de tiempo de aparición de jeringas
    this.tiempoUltimaJeringa = 0;
    this.intervaloJeringas = 1500; // hay que ver si puede ser mas rapido o si podemos hacer que acelere cuando queda menos tiempo

  // duración de la partida en segundos
    this.duracion = 30;
    this.inicioPartida = 0;
  }

  actualizar() {
  // si no estamos jugando, no actualizamos la partida
    if (this.estado !== "jugando") {
      return;
    }

    this.fondo.actualizar();

  // ver si hay que crear una jeringa nueva
    this.generarJeringa();

  // actualizar las jeringas
    for (let jeringa of this.jeringas) {
     jeringa.actualizar();

   // fijarse que la jeringa toque el auto bien y no antes
     if (
     jeringa.y > this.jugador.y - 20 &&
     jeringa.y < this.jugador.y + this.jugador.alto &&
      jeringa.carril === this.jugador.carril
      ) {
        this.estado = "perdiste";
      }
    }

  // eliminar jeringas que ya pasaron
    for (let i = this.jeringas.length - 1; i >= 0; i--) {
      if (this.jeringas[i].terminada) {
        this.jeringas.splice(i, 1);
      }
    }

  // calcular el tiempo transcurrido
    let tiempoTranscurrido = (millis() - this.inicioPartida) / 1000;

 //si pasas 30 segundos ganas
    if (tiempoTranscurrido >= this.duracion) {
      this.estado = "ganaste";
    }
  }

  generarJeringa() {
    if (millis() - this.tiempoUltimaJeringa > this.intervaloJeringas) {
      let carrilAleatorio = floor(random(0, 3));
      let nuevaJeringa = new Jeringa(carrilAleatorio);
      this.jeringas.push(nuevaJeringa);

      this.tiempoUltimaJeringa = millis();

   //random para que salgan en cualquier lado
      this.intervaloJeringas = random(1800, 2600);
    }
  }

  mostrar() {
    if (this.estado === "inicio") {
      this.mostrarPantallaInicio();
    } else if (this.estado === "jugando") {
      this.mostrarPantallaJuego();
    } else if (this.estado === "perdiste") {
      this.mostrarPantallaPerdiste();
    } else if (this.estado === "ganaste") {
      this.mostrarPantallaGanaste();
    } else if (this.estado === "creditos") {
      this.mostrarPantallaCreditos();
    }
  }

 //pantallas

 mostrarPantallaInicio() {
  background(20);

  fill(255);
  textAlign(CENTER, CENTER);
  
  textFont(fuenteTitulo);   // la fuente nueva
  textSize(38);
  text("POLE POSITION", width / 2, 90);
  textFont('sans-serif');   // vuelvo a poner la fuente normal para elresto
  textSize(20);
  text("INSTRUCCIONES", width / 2, 160);

  textSize(16);
  text("Esquivá las jeringas que aparecen en la carretera.", width / 2, 205);
  text("Usá las flechas IZQUIERDA y DERECHA.", width / 2, 235);
  text("Sobreviví durante 30 segundos para ganar.", width / 2, 265);

  this.dibujarBoton("JUGAR", width / 2 - 75, 310, 150, 45);
  this.dibujarBoton("CRÉDITOS", width / 2 - 75, 365, 150, 40);
}


  mostrarPantallaJuego() {
    this.fondo.mostrar();

    // dibujar jeringas
    for (let jeringa of this.jeringas) {
      jeringa.mostrar();
    }

    this.jugador.mostrar();

    // mostrar tiempo restante
    let transcurrido = (millis() - this.inicioPartida) / 1000;
    let restante = max(0, ceil(this.duracion - transcurrido));

    fill(0, 180);
    noStroke();
    rect(10, 10, 170, 40);

    fill(255);
    textAlign(LEFT, CENTER);
    textSize(18);
    text("Tiempo: " + restante + " s", 20, 30);
  }

  mostrarPantallaPerdiste() {
    background(10, 20, 25);

    fill(255, 50, 50);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("¡CHOCASTE!", width / 2, 140);

    fill(255);
    textSize(20);
    text("La jeringa te alcanzó.", width / 2, 200);

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

  // botones
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
    if (this.estado === "jugando") {
      this.jugador.mover(tecla);
    }
  }

  mousePresionado(x, y) {
    if (this.estado === "inicio") {
   // botonjugar
      if (x > width / 2 - 75 && x < width / 2 + 75 && y > 310 && y < 355) {
        this.iniciarPartida();
      }
    //botoncreditos
      else if (x > width / 2 - 75 && x < width / 2 + 75 && y > 365 && y < 405) {
        this.estado = "creditos";
    }
    }
  //la pantalla de perdiste o ganastae
    else if (this.estado === "perdiste" || this.estado === "ganaste") {
      // botón REINTENTAR / JUGAR DE NUEVO
      if (x > width / 2 - 100 && x < width / 2 + 100 && y > 260 && y < 310) {
        this.iniciarPartida();
      }
  //boton creditos
      else if (x > width / 2 - 75 && x < width / 2 + 75 && y > 325 && y < 365) {
        this.estado = "creditos";
      }
    }
  //pantalla creditos
    else if (this.estado === "creditos") {
      // botón VOLVER
      if (x > width / 2 - 75 && x < width / 2 + 75 && y > 310 && y < 355) {
        this.estado = "inicio";
   }
  }
  }

  iniciarPartida() {
    this.fondo.reiniciar();
    this.jugador.reiniciar();
    this.jeringas = [];

    this.inicioPartida = millis();
    this.tiempoUltimaJeringa = millis();
    this.intervaloJeringas = 2000;

    this.estado = "jugando";
  }

  reiniciar() {
    this.fondo.reiniciar();
    this.jugador.reiniciar();
    this.jeringas = [];
    this.estado = "inicio";
  }
}
