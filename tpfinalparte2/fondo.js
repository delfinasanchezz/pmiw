
class Fondo {
  constructor() {
    // Fondos normales
    this.fondos = [imagenFondo1, imagenFondo2, imagenFondo3];

    // Fondos cuando se activa el nitro
    this.fondosNitro = [
      imagenFondoNitro1,
      imagenFondoNitro2,
      imagenFondoNitro3
    ];

    this.indice = 0;
    this.tiempoCambio = 100;
    this.ultimoCambio = millis();
  }

  actualizar() {
    if (millis() - this.ultimoCambio > this.tiempoCambio) {
      this.indice++;

      if (this.indice >= 3) {
        this.indice = 0;
      }

      this.ultimoCambio = millis();
    }
  }

  mostrar() {
    if (keyIsDown(UP_ARROW)) {
      image(this.fondosNitro[this.indice], 0, 0, width, height);
    } else {
      image(this.fondos[this.indice], 0, 0, width, height);
    }
  }

  reiniciar() {
    this.indice = 0;
    this.ultimoCambio = millis();
  }
}
