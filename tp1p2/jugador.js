//jugadir
class Jugador {
  constructor() {
    //importanteee
    // 0 = carril izquierdo, 1 = medio, 2 = derecho
    this.carril = 1;

 // posiciones horizontales de los carriles
    this.carrilesX = [270, 400, 530];

 // posicion vertical del auto
    this.y = 310;

 // tamaño del auto
    this.ancho = 300;
    this.alto = 200;
  }

  mover(direccion) {
    if (direccion === LEFT_ARROW && this.carril > 0) {
      this.carril--;
    }
    
    if (direccion === RIGHT_ARROW && this.carril < 2) {
      this.carril++;
    }
  }

  mostrar() {
    //carril actual
    image(
      imagenAuto,
      this.carrilesX[this.carril] - this.ancho / 2,
      this.y,
      this.ancho,
      this.alto
    );
  }

  reiniciar() {
    this.carril = 1;
  }
}
