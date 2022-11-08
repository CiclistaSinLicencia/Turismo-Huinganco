
/* ======SCRIPT RESERVA====== */
let cinco = document.getElementById("5km")
cinco.addEventListener("change", five)

let diez = document.getElementById("10km")
diez.addEventListener("change", ten)

let veintiCinco = document.getElementById("25km")
veintiCinco.addEventListener("change", twentyFive)

let cincuenta = document.getElementById("50km")
cincuenta.addEventListener("change", fifty)

let txtTotalPagar = document.getElementById("txtTotalPagar")

// Valores iniciales 
let montoPagar
let paisOrigen = "argentina"
let km = 0

//Detectar pais del select Duh!
let selectCountry = document.getElementById("mySelect")
selectCountry.addEventListener('change', () => {

    countryValue = selectCountry.value

    switch (countryValue) {
        case '1':
            paisOrigen = "argentina"
            console.warn("Argentina")
            calcKm()
            break;

        case '2':
            console.warn("Extrangero")
            paisOrigen = "extrangero"
            calcKm()
            break;
        case '3':
            console.warn("Extrangero")
            paisOrigen = "aguas Internacionales"
            calcKm()
            break;
    }
})

//funcion en base al pais seleccionado
function funPaisOrigen(porcentajeDto, porcentajeSuma) {

    if (paisOrigen === "argentina") {
        montoPagar = montoPagar * -porcentajeDto / 100 + montoPagar
        msjDto = " + dto 30% = "
    }
    else if (paisOrigen === "extrangero") {
        montoPagar = montoPagar * porcentajeSuma / 100 + montoPagar
        msjDto = " + 180% extrangeros = "
    }
    else if (paisOrigen === "aguas Internacionales") {
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
    else if (km === 2) {
        ten()
    }
    else if (km === 3) {
        twentyFive()
    }
    else if (km === 4) {
        fifty()
    }
}

//cinco kilometros
function five() {
    montoPagar = 25
    km = 1
    funPaisOrigen(30, 180)
    txtMontoPagar()
}
//diez kilometros
function ten() {
    montoPagar = 85
    km = 2
    funPaisOrigen(30, 180)
    txtMontoPagar()
}
//25 kilometros
function twentyFive() {
    montoPagar = 125
    km = 3
    funPaisOrigen(30, 180)
    txtMontoPagar()
}
//50 kilometros
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
    let inputValue = inputDescuento.value.toLowerCase()

    if (inputValue === "ciclista") {
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


