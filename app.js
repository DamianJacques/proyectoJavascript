let monto = document.getElementById("montoInput").value;
let opcion = document.getElementById("monedaInput").value;
let moneda = document.getElementById("monedaOutput").value;
let boton = document.getElementById("boton");

let dolar1 = 0;
let euro1 = 0;
let real1 = 0;

function monedas(nombre, valor){
    this.nombre = nombre;
    this.valor = valor;
}

function conversion(){
    console.log("Hola");

}

const dolar = new monedas("Dolar", 166.97);
const euro = new monedas("Euro", 172.52);
const real = new monedas("Real", 31.68);


const calculaDolar = function (a, b){
    return (a*b);
}


const calculaEuro = function (a, b){
    return (a*b);
}


const calculaReal = function (a, b){
    return (a*b);
}

const resultado = [];


if (opcion == real1){
    boton.addEventListener("click", conversion);
/*switch(moneda){
    case peso2:
        dolar1 = calculaDolar(monto, dolar.valor);
        let dolar2 = 0;
        dolar2 = dolar1.toFixed(2);
        resultado.push(dolar2);
        boton.addEventListener("click", conversion);
        break;
    case 2:
        euro1 = calculaEuro(monto, euro.valor);
        let euro2 = 0;
        euro2 = euro1.toFixed(2);
        resultado.push(euro2);
        break;
     
    case 3:
        //real = monto * 31.68
        real1 = calculaReal(monto, real.valor);
        let real2 = 0;
        real2 = real1.toFixed(2);
        resultado.push(real2);
        //alert ("El monto es "+ real2 +" Pesos");
        break;
    default:
        //alert ("La opcion seleccionada no e sta en la lista");
        break;   

}
}
else if (opcion == 2){
    switch(moneda){
        case 1:
            dolar = monto / 166.97;
            let dolar2 = 0;
            dolar2 = dolar.toFixed(2);
            //alert ("El monto es "+ dolar2 +" Dolares");
            break;
        case 2:
            euro = monto / 172.52;
            let euro2 = 0;
            euro2 = euro.toFixed(2);
            //alert ("El monto es "+ euro2 +" Euros");
            break;
         
        case 3:
            real = monto / 31.68
            let real2 = 0;
            real2 = real.toFixed(2);
            //alert ("El monto es "+ real2 +" Reales");
            break;
        default:
            //alert ("La opcion seleccionada no e sta en la lista");
            break;   
}
*/
}else{
    //alert("Debe elegir opcion 1 o 2 en el primer menu");
}