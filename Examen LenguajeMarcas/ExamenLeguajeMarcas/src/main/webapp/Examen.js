let saldo = 0;
let inversionActiva = false;

// Para que se actualice el saldo
function actualizarSaldo(){
    document.getElementById("saldo").innerText = saldo.toFixed(2);
}
// Para que ingresemos dinero
function ingresar(){
    let cantidad = parseFloat(document.getElementById("ingreso").value);
    let error = document.getElementById("errorIngreso");

    error.innerText="";

    if(isNaN(cantidad) || cantidad < 0){
        error.innerText = "No es correcta esa cantidad";
        return;
    }

    saldo += cantidad;
    actualizarSaldo();
    document.getElementById("ingreso").value="";
}

// Para poder retirar dinero y se reste del saldo que teniamos
function retirar(){
    let cantidad = parseFloat(document.getElementById("retiro").value);
    let error = document.getElementById("errorRetiro");

    error.innerText="";

    if(isNaN(cantidad) || cantidad < 0){
        error.innerText = "No se permite esa cantidad";
        return;
    }

    if(cantidad > saldo){
        error.innerText = "No hay suficente saldo";
        return;
    }

    saldo -= cantidad;
    actualizarSaldo();
    document.getElementById("retiro").value="";
}
//Para poder invertir y ver la futura ganancia
function invertir(){
    let cantidad = parseFloat(document.getElementById("inversion").value);
    let error = document.getElementById("errorInversion");
    let res = document.getElementById("resultado");

    error.innerText="";
    res.innerHTML="";

    if(isNaN(cantidad) || cantidad < 0){
        error.innerText = "Cantidad no válida";
        return;
    }

    if(cantidad > saldo){
        error.innerText = "No hay suficiente dinero";
        return;
    }

    let interes = 0;

    if(cantidad < 1000) interes = 0.01;
    else if(cantidad <= 5000) interes = 0.025;
    else interes = 0.025;

    res.innerHTML += "<p>Inversión inicial: " + cantidad.toFixed(2) + " € </p>";
    res.innerHTML += "Total Ganancia: ";

    let total = cantidad;
    let ganancia = 0;

    for(let i=1;i<=12;i++){
        let g = total * interes;
        total += g;
        ganancia += g;

        res.innerHTML += ">"+i+""+total.toFixed(2)+" €"+ganancia.toFixed(2)+" €";
    }

    res.innerHTML+="";
    inversionActiva = true;
}
