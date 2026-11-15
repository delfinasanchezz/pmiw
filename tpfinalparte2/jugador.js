class Jugador {
  constructor() {
    this.carril = 1;
    this.carrilesX = [270, 400, 560];
    this.y = 250;
    this.ancho = 260;
    this.alto = 200;
  }

  mover(direccion) {
    if (direccion == LEFT_ARROW && this.carril > 0) {
      this.carril--;
    }

    if (direccion == RIGHT_ARROW && this.carril < 2) {
      this.carril++;
    }
  }

  mostrar() {
    image(imagenAuto, this.carrilesX[this.carril] - this.ancho / 2, this.y, this.ancho, this.alto);
  }

  reiniciar() {
    this.carril = 1;
  }
}
