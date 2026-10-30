//jeringa

class Jeringa {
  constructor(carril) {
    this.carril = carril;

    // posiciones horizontales de los carriles
    this.carrilesX = [270, 400, 530];

    // la jeringa empieza arriba de la pantalla
    this.x = this.carrilesX[this.carril];
    this.y = 0

    // tamaño fijo
    this.ancho = 65;
    this.alto = 85;

    // velocidad de caída
    this.velY = 6;

    // si ya salió de la pantalla
    this.terminada = false;
  }

  actualizar() {
    // la jeringa baja
    this.y += this.velY;

    // si ya paso la parte de abajo la marcamos como terminada
    if (this.y > height + this.alto) {
      this.terminada = true;
    }
  }

  mostrar() {
    // dibuja la jeringa centrada en (x, y)
    image(
      imagenJeringa,
      this.x - this.ancho / 2,
      this.y - this.alto / 2,
      this.ancho,
      this.alto
    );
  }

  reiniciar() {
    this.y = -60;
    this.terminada = false;
  }
}
