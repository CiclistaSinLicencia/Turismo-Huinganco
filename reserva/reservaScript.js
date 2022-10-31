
/* ======SCRIPT RESERVA====== */

/*  */
let cinco = document.getElementById("5km")
cinco.addEventListener("change", five)

let diez = document.getElementById("10km")
diez.addEventListener("change", ten)

let veintiCinco = document.getElementById("25km")
veintiCinco.addEventListener("change", twentyFive)

let cincuenta = document.getElementById("50km")
cincuenta.addEventListener("change", fifty)

let txtTotalPagar = document.getElementById("txtTotalPagar")

let montoPagar
// posicion inicial 
let paisOrigen = "Argentina"
let km = 0




function funPaisOrigen(porcentajeDto, porcentajeSuma) {

    if (paisOrigen === "Argentina") {
        montoPagar = montoPagar * -porcentajeDto / 100 + montoPagar
        msjDto = " + dto 30% = "
    }
    if (paisOrigen === "Chile") {
        montoPagar = montoPagar * porcentajeSuma / 100 + montoPagar
        msjDto = " + 180% x chileno = "
    }
    if (paisOrigen === "Otro") {
        montoPagar = montoPagar
        msjDto = " "
    }
    if (dtoTrue === true) {
        montoPagar = montoPagar - 2
    }
}

function txtMontoPagar() {
    txtTotalPagar.textContent = "Total " + msjDto + montoPagar + " Usd"
}

//index de cual es la card seleccionada
function calcKm() {  

    if (km === 1) {
        five()
    }
    if (km === 2) {
        ten()
    }
    if (km === 3) {
        twentyFive()
    }
    if (km === 4) {
        fifty()
    }
}

// saber cual es el pais seleccionado
document.getElementsByTagName('select')[0].onchange = function () {
    var index = this.selectedIndex;
    var inputText = this.children[index].innerHTML.trim();
    paisOrigen = inputText
    calcKm()
}

/* 1 */
function five() {
    montoPagar = 25
    km = 1
    funPaisOrigen(30, 180)
    txtMontoPagar()
}
/* 2 */
function ten() {
    montoPagar = 85
    km = 2
    funPaisOrigen(30, 180)
    txtMontoPagar()
}
/* 3 */
function twentyFive() {
    montoPagar = 125
    km = 3
    funPaisOrigen(30, 180)
    txtMontoPagar()
}
/* 4 */
function fifty() {
    montoPagar = 199
    km = 4
    funPaisOrigen(30, 180)
    txtMontoPagar()
}

//codigo de descuento
let inputDescuento = document.getElementById("cod-descuento-reserva")
inputDescuento.addEventListener("input", funDescuento)
let txtCodDescuento = document.getElementById("txt-cod-descuento")

let dtoCodigo = 0
let dtoTrue = false
function funDescuento() {
    let inputValue = inputDescuento.value

    if (inputValue === "Ciclista" || inputValue === "ciclista") {

        inputDescuento.style.border = "3px solid var(--form-valid-border)"
        dtoTrue = true
        dtoCodigo = -2
        txtCodDescuento.innerHTML = "tenes 2 Usd de descuento aplicado!"
        txtCodDescuento.style.color = " var(--form-valid-txt) "
        calcKm()
    }
    else if (inputValue === "") {

        dtoTrue = false
        dtoCodigo = 0
        txtCodDescuento.innerHTML = "metele 'ciclista' para el dto "
        inputDescuento.style.border = "3px solid var( --form-input-border)"
        calcKm()

    }
    else {
        dtoTrue = false
        dtoCodigo = 0
        txtCodDescuento.innerHTML = " No es un codigo valido"
        inputDescuento.style.border = "3px solid #ff629483"
        txtCodDescuento.style.color = "#ff6294"
        calcKm()
    }
}



//Validacion eMail Reserva

let emailReserva = document.getElementById("mail-form-reserva");
emailReserva.addEventListener("input", validationReserva)
let formReserva = document.getElementById("form-Reserva");
let btnReserva = document.getElementById("btn-submit-reserva")



function validationReserva() {
    let mailValue = emailReserva.value
    let patternConsul = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (mailValue == "") {
        emailReserva.style.outline = "1px solid var( --form-input-border)";
        btnReserva.style.backgroundColor = "#75b418"
    }

    else {
        btnReserva.style.backgroundColor = "#fa7373"
        emailReserva.style.outline = "2px solid #fa7373";
    }
    if
        (mailValue.match(patternConsul)) {
        btnReserva.style.backgroundColor = "#75b418"
        emailReserva.style.outline = "2px solid #75b418";
    }


}


