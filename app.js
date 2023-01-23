0;



function guardaTransaccion(transaccion) {
  let transaccionArray = JSON.parse(localStorage.getItem("transaccion")) || [];

  transaccionArray.push(transaccion);

  let transaccionArrayJson = JSON.stringify(transaccionArray);
  localStorage.setItem("transaccion", transaccionArrayJson);
}

let botonCalcular = document.getElementById("botonCalcular");

let dolar1 = 0;
let euro1 = 0;
let real1 = 0;
let pesoReal = 0;
let pesoDolar = 0;
let realDolar = 0;

function monedas(nombre, valor) {
  this.nombre = nombre;
  this.valor = valor;
}

const dolarApeso = new monedas("Dolar", 166.97);
const dolarAreal = new monedas("Dolarr", 5.29);
const realApeso = new monedas("Real", 31.68);
const pesoAreal = new monedas("Pesor", 0.032);
const pesoAdolar = new monedas("Pesod", 0.0166);
const realAdolar = new monedas("Reald", 0.19);

const calculaConversion = function (a, b) {
  return a * b;
};

function conversion() {
  event.preventDefault();
  let resultado;
  const monto = document.getElementById("montoInput").value || 0;
  const valor = document.getElementById("monedaInput");
  const opcion = valor.value;
  const moneda = document.getElementById("monedaOutput").value;
  
  if (opcion) {
    if (opcion == "dolar") {
      switch (moneda) {
        case "peso":
          dolar1 = calculaConversion(monto, dolarApeso.valor);
          resultado = dolar1.toFixed(2);
          document.getElementById("total").innerHTML = resultado;

          break;
        case "dolar":
          Swal.fire({
            title:
              "La moneda es la misma, por favor elija una moneda diferente",
            showClass: {
              popup: "animate__animated animate__pulse",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          break;
        case "real":
          real1 = calculaConversion(monto, dolarAreal.valor);
          resultado = real1.toFixed(2);
          document.getElementById("total").innerHTML = resultado;
          break;
      }
    } else if (opcion == "real") {
      switch (moneda) {
        case "peso":
          real1 = calculaConversion(monto, realApeso.valor);
          resultado = real1.toFixed(2);
          document.getElementById("total").innerHTML = resultado;
          break;
        case "real":
          Swal.fire({
            title:
              "La moneda es la misma, por favor elija una moneda diferente",
            showClass: {
              popup: "animate__animated animate__pulse",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          break;
        case "dolar":
          realDolar = calculaConversion(monto, realAdolar.valor);
          resultado = realDolar.toFixed(2);
          document.getElementById("total").innerHTML = resultado;
          break;
      }
    } else if (opcion == "peso") {
       switch (moneda) {
        case "peso2":
          Swal.fire({
            title:
              "La moneda es la misma, por favor elija una moneda diferente",
            showClass: {
              popup: "animate__animated animate__pulse",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          break;
        case "real":
          pesoReal = calculaConversion(monto, pesoAreal.valor);
          resultado = pesoReal.toFixed(2);
          document.getElementById("total").innerHTML = resultado;
          break;
        case "dolar":
          pesoDolar = calculaConversion(monto, pesoAdolar.valor);
          resultado = pesoDolar.toFixed(2);
          document.getElementById("total").innerHTML = resultado;
          break;
        case undefined:
          Swal.fire({
            title:
              "La moneda es la misma, por favor elija una moneda diferente",
            showClass: {
              popup: "animate__animated animate__pulse",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          break;
      }
    }

    if (resultado) {
      const transaccion = {
        monto,
        moneda1: opcion,
        moneda2: moneda,
        resultado,
      };

      guardaTransaccion(transaccion);
    }
  } else {
    Swal.fire({
      title: "Seleccione una moneda para convertir por favor",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
}

botonCalcular.addEventListener("click", conversion);

let botonMostrar = document.getElementById("botonMostrar");



function recorrerHistorial(historial) {
  for (let i = 0; i < historial.length; i++) {
 
    const fila = document.createElement("div");
    const monto = document.createElement("p");
    const monedaInicial = document.createElement("p");
    const monedaDestino = document.createElement("p");
    const resultado = document.createElement("p");

    monto.innerText = historial[i].monto;
    monedaInicial.innerText = historial[i].moneda1;
    monedaDestino.innerText = historial[i].moneda2;
    resultado.innerText = historial[i].resultado;

    fila.classList.add("mostrar");
    fila.appendChild(monto);
    fila.appendChild(monedaInicial);
    fila.appendChild(monedaDestino);
    fila.appendChild(resultado);

    document.querySelector(".divHistorial").appendChild(fila);
  }
}

function mostrarHistorial() {
  event.preventDefault();
  const opcionMostrar = document.getElementById("tiempo").value;
  let arrayStorage = JSON.parse(localStorage.getItem("transaccion")) || [];
 

  switch (opcionMostrar) {
    case "cinco":
      let arrayUltimosCinco = arrayStorage.slice(-5);
      recorrerHistorial(arrayUltimosCinco);
      break;
    case "diez":
      let arrayUltimosDiez = arrayStorage.slice(-10);
      recorrerHistorial(arrayUltimosDiez);
      break;
    case "veinte":
      let arrayUltimosVeinte = arrayStorage.slice(-20);
      recorrerHistorial(arrayUltimosVeinte);
      break;
    default:
      break;
  }
}
botonMostrar.addEventListener("click", mostrarHistorial);
