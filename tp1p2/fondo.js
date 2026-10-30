class Fondo {

  constructor() {

    //array
    this.fondos = [
      imagenFondo1,
      imagenFondo2,
      imagenFondo3
    ];

    this.indice = 0;
    //tiempo dura cada fondo.
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

    //ocupa toda la pantalla
    image(
      this.fondos[this.indice],
      0,
      0,
      width,
      height
    );
  }


  reiniciar() {

    this.indice = 0;
    this.ultimoCambio = millis();
  }

}
