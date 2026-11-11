class AutoRival {
  constructor(carril) {
    this.carril = carril;
    this.profundidad = 0;
    this.velocidad = random(0.005, 0.0065);
    this.carrilesX = [270, 400, 530];
    this.terminado = false;
  }

  actualizar(acelerando = false) {
    let multiplicador = 1;
    if (acelerando) {
      multiplicador = 3.5;
    }

    this.profundidad += this.velocidad * multiplicador;

    if (this.profundidad >= 2.4) {
      this.terminado = true;
    }
  }

  colisionaCon(jugador) {
    if (this.carril != jugador.carril) {
      return false;
    }

    return this.profundidad >= 0.88 && this.profundidad <= 1.12;
  }

  mostrar() {
    let profundidadHorizontal = constrain(this.profundidad, 0, 1);
    let x = lerp(width / 2, this.carrilesX[this.carril], profundidadHorizontal);
    let y = lerp(230, 395, this.profundidad);

    let escala = lerp(0.035, 0.75, pow(this.profundidad, 0.6));
    let ancho = 300 * escala;
    let alto = 200 * escala;

    push();
    imageMode(CENTER);
    image(imagenAutoRival, x, y, ancho, alto);
    pop();
  }
}