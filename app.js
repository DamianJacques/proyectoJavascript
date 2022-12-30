

let boton = document.getElementById("boton");

let dolar1 = 0;
let euro1 = 0;
let real1 = 0;
let pesoReal = 0;
let pesoDolar = 0;
let realDolar = 0;


function monedas(nombre, valor){
    this.nombre = nombre;
    this.valor = valor;
}


const dolarApeso = new monedas("Dolar", 166.97);
const dolarAreal = new monedas("Dolarr", 5.29)
const realApeso = new monedas("Real", 31.68);
const pesoAreal = new monedas("Pesor", 0.032);
const pesoAdolar = new monedas("Pesod", 0.0166);
const realAdolar = new monedas("Reald", 0.19);

  
 


const calculaDolarApeso = function (a, b){
    return (a*b);
}

const calculaDolarAreal = function (a, b){
    return (a*b);
}


const calculaEuroApeso = function (a, b){
    return (a*b);
}

const calculaEuroAreal = function (a, b){
    return (a*b);
}

const calculaRealApeso = function (a, b){
    return (a*b);
}

const calculaRealdolar = function (a, b){
    return (a*b);
}




function conversion(){
    event.preventDefault();
    const resultado = [];
    const monto = document.getElementById("montoInput").value;
    const valor = document.getElementById("monedaInput");
    const opcion = valor.value;
    const moneda = document.getElementById("monedaOutput").value;
    if (opcion == "dolar1"){
       switch(moneda){
        case "peso2":
            dolar1 = calculaDolarApeso(monto, dolarApeso.valor);
            let dolar2 = 0;
            dolar2 = dolar1.toFixed(2);
            resultado.push(dolar2);
            document.getElementById("total").innerHTML = dolar2
            break;
        case "dolar2":
            alert("La moneda es la misma, por favor elija una moneda diferente");
            break;
        case "real2":
            real = calculaDolarAreal(monto, dolarAreal.valor);
            let real2 = 0;
            real2 = real.toFixed(2);
            resultado.push(real2);
            document.getElementById("total").innerHTML = real2
            break;
    }
    }else if(opcion == "real1"){
        switch(moneda){
        case "peso2":
            real1 = calculaRealApeso(monto, realApeso.valor);
            let realp = 0;
            realp = real1.toFixed(2);
            resultado.push(realp);
            document.getElementById("total").innerHTML = realp
                break;
        case "real2":
                alert("La moneda es la misma, por favor elija una moneda diferente");
                break;
        case "dolar2":
            alert("Real a Dolar");
            break;
        }
        
    }else if(opcion == "peso1"){
        switch(moneda){
        case "peso2":
            alert("La moneda es la misma, por favor elija una moneda diferente");
                break;
        case "real2":
             alert("Peso a Real");
                break;
        case "dolar2":
            alert("Peso a Dolar");
            break;
        }    
    }else{
        alert("chau");
    }
}

boton.addEventListener("click", conversion);


