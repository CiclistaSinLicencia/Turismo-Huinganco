

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
    funDescuento()
}

function funDiez(){
    montoPagar = 85
    console.log(montoPagar)
    totalPagar.textContent = "El monto total a pagar es $" + montoPagar
    funDescuento()
}

function funveintiCinco(){
    montoPagar = 125
    console.log(montoPagar)
    totalPagar.textContent = "El monto total a pagar es $" + montoPagar
    funDescuento()
}
function funCincuenta(){
    montoPagar = 199
    console.log(montoPagar)
    totalPagar.textContent = "El monto total a pagar es $" + montoPagar
    funDescuento()
}


function funDescuento(){
    
document.addEventListener('input', function (event) {

	// Only run on our select menu
	if (event.target.id !== 'pais-form-reserva') return;
    
    if (event.target.value === 'argentina') {
		descuento.textContent = "Descuento 30% residente " + (montoPagar * 30 / 100 + montoPagar)
        console.log("Descuento 30% residente " + (montoPagar * 30 / 100 + montoPagar))
	}
    if (event.target.value === 'chile') {
		descuento.textContent = "tenes que pagar 180% mas " + (montoPagar * 180 / 100 + montoPagar)
        console.log("Descuento 30% residente " + (montoPagar * 30 / 100 + montoPagar))
	}
    if (event.target.value === 'brasil') {
		descuento.textContent = "tenes que pagar 180% mas " + (montoPagar * 180 / 100 + montoPagar)
        console.log("Descuento 30% residente " + (montoPagar * 30 / 100 + montoPagar))
	}
    if (event.target.value === 'paraguay') {
		descuento.textContent = "tenes que pagar 180% mas " + (montoPagar * 180 / 100  + montoPagar)
        console.log("Descuento 30% residente " + (montoPagar * 30 / 100 + montoPagar))
	}
	// The selected value
	console.log(event.target.value);

	// The selected option element
	console.log(event.target.options[event.target.selectedIndex]);

}, false);

}