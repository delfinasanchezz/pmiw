
function dentroDe(btn) {
  return mouseX > btn.x && mouseX < btn.x + btn.w &&
         mouseY > btn.y && mouseY < btn.y + btn.h;
}
function mouseClicked() {
  if (pantalla == -1) {
    if (dentroDe(BTN_JUGAR)) pantalla = 0;
    return;
  }
  if (pantalla == 0) {
    pantalla = 1;
  } else if (pantalla == 1) {
    pantalla = 2;
  } else if (pantalla == 2) {
    pantalla = 3;
  } else if (pantalla == 3) {
    if (dentroDe(BTN_AUTO)) pantalla = 4;
  } else if (pantalla == 4) {
    if (dentroDe(BTN_SI)) pantalla = 5;
    else if (dentroDe(BTN_NO)) pantalla = 7;
  } else if (pantalla == 7) {
    pantalla = 6;
  } else if (pantalla == 6) {
    pantalla = 3;
  } else if (pantalla == 5) {
    pantalla = 8;
  } else if (pantalla == 8) {
    pantalla = 9;
  } else if (pantalla == 9) {
    if (dentroDe(BTN_ACEPTAR)) pantalla = 10;
  } else if (pantalla == 10) {
    if (dentroDe(BTN_CHETO)) pantalla = 11;
    else if (dentroDe(BTN_FEO)) pantalla = 12;
  } else if (pantalla == 11) {
    pantalla = 13;
  } else if (pantalla == 12){
    pantalla = 14;
  } else if (pantalla == 13){
    pantalla = 16;
  }else if (pantalla ==14){
    pantalla = 15;
  }else if (pantalla== 15){
    if(dentroDe(BTN_FENTANILO)) pantalla = 19;
  else if (dentroDe(BTN_PUERTASECRETA)) pantalla = 20;
  } else if (pantalla== 19){
  pantalla = 21;
 }else if (pantalla == 16 ){
  pantalla = 22;
 }else if (pantalla == 20){
  pantalla = 23;
 }else if (pantalla == 21){
 pantalla = 18;
 }else if (pantalla== 18){
    if(dentroDe(BTN_REINICIAR)) pantalla = -1;
 }else if (pantalla == 22){
 pantalla = 24;
 }else if (pantalla== 24){
    if(dentroDe(BTN_REINICIAR)) pantalla = -1;
 }else if (pantalla == 23){
 pantalla = 17;
}else if (pantalla== 17){
    if(dentroDe(BTN_REINICIAR)) pantalla = -1;

}
  
  print("X: " + mouseX + " | Y: " + mouseY);
}

function mostrarPantalla(p) {
  if (p == 0) {
    mostrarTexto("Trabajás en una estación de servicio YPF.");
  } else if (p == 1) {
    mostrarTexto("Macri tiene un auto deportivo increíble...");
  } else if (p == 2) {
    mostrarTexto("Macri se va a comprar medialunas.");
  } else if (p == 3) {
    mostrarTexto("El auto de Macri quedó solo...");
  } else if (p == 4) {
    mostrarTexto("¿Qué vas a hacer? ¿Robar el auto?");
    mostrarBotonesSiNo();
  } else if (p == 5) {
    mostrarTexto("Te das a la fuga hasta México. Macri está enojado.");
  } else if (p == 7) {
    mostrarTexto("Macri te dice: gracias pibe y se va.");
  } else if (p == 6) {
    mostrarTexto("Macri vuelve después de unos dias");
  } else if (p == 8) {
    mostrarTexto("Llegas a miami y encontras por facebook una publicacion para competir en una carrera");
  } else if (p == 9) {
    mostrarTexto("¿Aceptás participar en la carrera?");
    mostrarBoton(BTN_ACEPTAR);
  } else if (p == 10) {
    mostrarTexto ("Antes de la carrera queres salir de joda, tenes dos opciones");
  } else if (p ==11) { 
    mostrarTexto ("Caes a una joda y te encontras al mismisimo...");
  }else if (p == 12){
    mostrarTexto ("caes a una joda y te encontras a la mismisima...");
  } else if (p== 13){ 
    mostrarTexto(" Ricardo Fort que te dice: vamos pibe, bailas bien, quedate toda \n la noche conmigo.");
  }else if (p==14){
    mostrarTexto(" Mirtha Legrand que te dice: La noche es joven... te puedo ofrecer \n lo que tomé yo para aguantar tanto tiempo");
  } else if (p==15){
    mostrarTexto("Te ofrece una misteriosa medicina...");
  }else if (p==16){
    mostrarTexto (" En un flash se hace hora de la carrera, esperas a que den las\n luces para  acelerar");
} else if (p==19){
   mostrarTexto (" No sabes como pero se hace hora de la carrera, esperas a que \n den las luces para acelerar");
} else if (p==20){
   mostrarTexto (" Descansaste, se hace hora de la carrera, esperas a que den \n las luces para acelerar");
} else if (p==21) {
  mostrarTexto (" El fentanilo que te ofreció Mirtha empieza a dar efecto, se \n te duermen las piernas y chocas"); 
}  else if (p==22) {
  mostrarTexto (" Estás con mucha resaca y no podes terminar la carrera"); 
  }  else if (p==23) {
  mostrarTexto (" Evitaste todas las distracciones e hiciste una carrera estupenda"); 
  } else if (p==24){
    mostrarTexto (" No importa, Ricardo compró el primer lugar y terminaste ganando.\n Bailas muy bien!");
  } if (p == 18 || p == 24 || p == 17) {
  dibujarBoton(BTN_REINICIAR);
}
}
function mostrarFondo(numero) {
  background(0);
  image(imagenes[numero], 0, 0, 800, 450);
}

function mostrarTexto(texto) {
  fill(0);
  rect(29, 368, 740, 70);

  fill(255);
  textFont('sans-serif');   
  textSize(20);
  textAlign(LEFT, TOP);    
  text(texto, 35, 375);     

  textAlign(LEFT, BASELINE); 
}



function mostrarBoton(btn) {
  fill(255);
  rect(btn.x, btn.y, btn.w, btn.h);
  fill(0);

  textFont('sans-serif');   // fuente normal para los botones del juego
  textSize(20);
  textAlign(CENTER, CENTER); 
  let cx = btn.x + btn.w / 2; 
  let cy = btn.y + btn.h / 2; 
  text(btn.label, cx, cy);

  textAlign(LEFT, BASELINE);
}



function mostrarBotonesSiNo() {
  mostrarBoton(BTN_SI);
  mostrarBoton(BTN_NO);
}
