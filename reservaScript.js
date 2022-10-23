

let cinco = document.getElementById("5km").addEventListener("change" , funCinco)
let  diez = document.getElementById("10km").addEventListener("change" ,funDiez)
let  veintiCinco = document.getElementById("25km").addEventListener("change" , funveintiCinco)
let  cincuenta = document.getElementById("50km").addEventListener("change", funCincuenta)

let totalPagar = document.getElementById("totalPagar")
let descuento = document.getElementById("descuento")

let montoPagar = 0


function funCinco(){
    montoPagar = 25
    console.log(montoPagar)
    totalPagar.textContent =  "El monto total a pagar es $" + montoPagar
}

function funDiez(){
    montoPagar = 85
    console.log(montoPagar)
    totalPagar.textContent = "El monto total a pagar es $" + montoPagar
}

function funveintiCinco(){
    montoPagar = 125
    console.log(montoPagar)
    totalPagar.textContent = "El monto total a pagar es $" + montoPagar
}
function funCincuenta(){
    montoPagar = 199
    console.log(montoPagar)
    totalPagar.textContent = "El monto total a pagar es $" + montoPagar
}
