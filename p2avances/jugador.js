class Jugador {
  constructor() {
    this.carril = 1;
    this.carrilesX = [270, 400, 530];
    this.y = 310;
    this.ancho = 300;
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
    // dibujo el auto en el carril que corresponde
    image(imagenAuto, this.carrilesX[this.carril] - this.ancho / 2, this.y, this.ancho, this.alto);
  }

  reiniciar() {
    this.carril = 1;
  }
}
