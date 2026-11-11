class Fondo {
  constructor() {
    this.fondos = [imagenFondo1, imagenFondo2, imagenFondo3];
    this.indice = 0;
    this.tiempoCambio = 100;
    this.ultimoCambio = millis();
  }

  actualizar() {
    if (millis() - this.ultimoCambio > this.tiempoCambio) {
      this.indice++;

      if (this.indice >= this.fondos.length) {
        this.indice = 0;
      }
      this.ultimoCambio = millis();
    }
  }

  mostrar() {
    image(this.fondos[this.indice], 0, 0, width, height);
  }

  reiniciar() {
    this.indice = 0;
    this.ultimoCambio = millis();
  }
}