const fechado = "interruptor_fechado.png";
const aberto = "interruptor_aberto.png";

const lampOn = "lampada_acesa.png";
const lampOff = "lampada_apagada.png";

window.onload = function () {
  let element1 = document.getElementById("interruptor1");
  let element2 = document.getElementById("interruptor2");
  let element3 = document.getElementById("interruptor3");
  let element4 = document.getElementById("interruptor4");
  let element5 = document.getElementById("interruptor5");

  let lampada = document.getElementById("lampada");

  element1.onclick = function () {
    if (element1.src.match(aberto)) {
      element1.src = fechado;
    } else {
      element1.src = aberto;
    }

    verificar();
  };

  element2.onclick = function () {
    if (element2.src.match(aberto)) {
      element2.src = fechado;
    } else {
      element2.src = aberto;
    }

    verificar();
  };

  element3.onclick = function () {
    if (element3.src.match(aberto)) {
      element3.src = fechado;
    } else {
      element3.src = aberto;
    }

    verificar();
  };

  element4.onclick = function () {
    if (element4.src.match(aberto)) {
      element4.src = fechado;
    } else {
      element4.src = aberto;
    }

    verificar();
  };

  element5.onclick = function () {
    if (element5.src.match(aberto)) {
      element5.src = fechado;
    } else {
      element5.src = aberto;
    }

    verificar();
  };

  function verificar() {
    if (
      (element1.src.match(fechado) && element2.src.match(fechado) && element4.src.match(fechado)) ||
      (element1.src.match(fechado) && element2.src.match(fechado) && element5.src.match(fechado)) ||
      (element3.src.match(fechado) && element4.src.match(fechado)) || (element3.src.match(fechado) && element5.src.match(fechado))
    ) {
      lampada.src = lampOn;
    } else {
    lampada.src = lampOff;
    }
  }
};
