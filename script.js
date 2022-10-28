/* btn sound */
const audio = new Audio();
audio.src = "./audio/click.wav";
/*  */


let theme = localStorage.getItem('data-theme');
console.warn(localStorage.getItem('data-theme'))

const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}

if(theme === 'dark'){
    changeThemeToDark()
}


const checkbox = document.getElementById("theme");
checkbox.addEventListener('change', () => {
    
        console.warn(localStorage.getItem('data-theme'))

    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }   
});



/* IMAGENES Carousel */
const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
    button.addEventListener("click", ( ) => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

/* ANIMACION boton dropdown */
$(document).ready(function () {
    $(".burger").on("click", function () {
      $(this).toggleClass("active");
    });
  });

  /* FORMULARIO NEWS */
function validation()
{
                let form = document.getElementById("form-news");
                let email = document.getElementById("email-news").value;
                let submit = document.getElementById("submit-news");
                 let text = document.getElementById("text"); 
                let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

                if (email.match(pattern))
                {
                    form.classList.add("valid");
                    form.classList.remove("invalid");
                    text.innerHTML = "eMail valido";
                    text.style.color = "#b8ff5c"
                    submit.style.backgroundColor = " #75b418";
                }
                else
                {
                    form.classList.remove("valid");
                    form.classList.add("invalid");
                    text.innerHTML = "el eMail es Invalido";
                    text.style.color = "#fa7373";
                    submit.style.backgroundColor = "#fa7373";
                    
                }
                if (email == "")
                {
                    form.classList.remove("valid");
                    form.classList.remove("invalid");
                    text.innerHTML = "";
                    text.style.color = "#b8ff5c"
                    submit.style.backgroundColor = " #2596be";
                }
}
/* FORMULARIO CONSULTA */
function validationConsul()
{
                let formConsul = document.getElementById("form-consul");
                 let emailConsul = document.getElementById("email-consul").value;  
                let emailConsul2 = document.getElementById("email-consul");
                let btnConsul = document.getElementById("btn-submit-consul");
                let submitConsul = document.getElementById("submit-consul");
                let patternConsul = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

                if 
                (emailConsul.match(patternConsul))
                {
                    formConsul.classList.add("valid");
                    formConsul.classList.remove("invalid");
                    
                    emailConsul2.style.border = "0px";
                    emailConsul2.style.outline = "2px solid #75b418"
                    btnConsul.style.backgroundColor = " #75b418";;
                }
                else
                {
                    formConsul.classList.remove("valid");
                    formConsul.classList.add("invalid");
                  
                    emailConsul2.style.border = "0px";
                    emailConsul2.style.outline = "2px solid #fa7373";
                    btnConsul.style.backgroundColor = " #fa7373";
                }
                if (emailConsul == "")
                {
                    formConsul.classList.remove("valid");
                    formConsul.classList.remove("invalid");
               
                    emailConsul2.style.backgroundColor = "var(--form-input-backG)";
                    emailConsul2.style.border = "0px";
                    emailConsul2.style.outline = "1px solid var(--form-input-border)";

                    btnConsul.style.backgroundColor = " #75b418";;
                 
                }
}










/* ======SCRIPT RESERVA====== */
 /* ------------------------------themeOnLOAD!------------------------------ */
 function setThemePreference(){
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    {
        console.warn("DARK THEME ON BABY!")
        document.body.classList.toggle("dark")
        return
    }
    else{
        document.body.classList.toggle("")
    }
}
document.onload = setThemePreference();



/*  */
let cinco = document.getElementById("5km")
cinco.addEventListener("change", five )

 let  diez = document.getElementById("10km")
diez.addEventListener("change", ten)

let  veintiCinco = document.getElementById("25km")
veintiCinco.addEventListener("change",twentyFive)

let  cincuenta = document.getElementById("50km")
cincuenta.addEventListener("change",fifty )  

let txtTotalPagar = document.getElementById("txtTotalPagar")

let montoPagar
/* posicion inicial */
let paisOrigen = "Argentina" 
let km = 0
/*  */

/* funciones resumidas */

function funPaisOrigen(porcentajeDto,porcentajeSuma){

    if(paisOrigen === "Argentina"){
    
            montoPagar = montoPagar * -porcentajeDto  /100 + montoPagar
            console.log("Dto por ser Argentino " + montoPagar)
             msjDto = " + dto 30% = " 
    }
    if(paisOrigen === "Chile")
    {
            montoPagar = montoPagar * porcentajeSuma / 100  + montoPagar
            msjDto = " + 180% x chileno = "    
    }
    if(paisOrigen === "Otro")
    {
            montoPagar = montoPagar
            msjDto = " "    
    }
    if(dtoTrue === true){
        montoPagar = montoPagar - 2
    }
}

function txtMontoPagar(){
    txtTotalPagar.textContent = "Total "+ msjDto +  montoPagar + " Usd"
}


function calcKm (){
   
    if(km===1)
    {
        five()
    }
    if(km===2)
    {
        ten()
    }
    if(km===3)
    {
        twentyFive()
    }
    if(km===4)
    {
        fifty()
    }
}

/* select pais */
document.getElementsByTagName('select')[0].onchange = function() {
    var index = this.selectedIndex;
    var inputText = this.children[index].innerHTML.trim();
    paisOrigen = inputText
    calcKm()
  }

/* 1 */
function five(){   
 montoPagar = 25
    km = 1
    funPaisOrigen(30,180)
    txtMontoPagar()
}
/* 2 */
function ten()
{
    montoPagar =  85
    km = 2
    funPaisOrigen(30,180)
    txtMontoPagar()
}
/* 3 */
function twentyFive()
{
    montoPagar =  125
    km = 3
    funPaisOrigen(30,180)
    txtMontoPagar()
}

/* 4 */
function fifty()
{
    montoPagar =  199
    km = 4
    funPaisOrigen(30,180)
    txtMontoPagar()
}


let inputDescuento = document.getElementById ("cod-descuento-reserva")

let txtCodDescuento = document.getElementById("txt-cod-descuento")

inputDescuento.addEventListener("input",funDescuento)
/* descuento */




let dtoCodigo = 0
let dtoTrue = false
function funDescuento(){
    let inputValue= inputDescuento.value
 
    if(inputValue === "Ciclista" || inputValue === "ciclista"){
 
        inputDescuento.style.border = "3px solid var(--form-valid-border)"
        dtoTrue = true
        dtoCodigo = -2
        txtCodDescuento.innerHTML = "tenes 2 Usd de descuento aplicado!" 
        txtCodDescuento.style.color = " var(--form-valid-txt) "
        calcKm()
    }
    else if(inputValue=== ""){
        
        dtoTrue = false
        dtoCodigo = 0 
        txtCodDescuento.innerHTML = "Metele un Ciclista "
        inputDescuento.style.border = "3px solid var( --form-input-border)"
        calcKm() 

    }
    else{
       
        dtoTrue = false
        dtoCodigo = 0 
        txtCodDescuento.innerHTML = " No es un codigo valido"
        inputDescuento.style.border = "3px solid #ff629483"
        txtCodDescuento.style.color = "#ff6294"
        calcKm()
    }

}


/*  */

/* FORMULARIO CONSULTA */

       
                 let emailReserva = document.getElementById("mail-form-reserva");  
                 emailReserva.addEventListener("input", validationReserva)

                 let formReserva = document.getElementById("form-Reserva");

                let btnReserva = document.getElementById("btn-submit-reserva")


                 let patternConsul = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

                function validationReserva()
                {
                    mailValue = emailReserva.value
                    
                  
                if 
                (mailValue.match(patternConsul))
                {
                    formReserva.classList.add("valid");
                    formReserva.classList.remove("invalid");

                    btnReserva.style.backgroundColor = "#75b418"
                    emailReserva.style.outline = "2px solid #75b418";
                    console.log("FUNCIONA!")
                }
                  
                if(!mailValue.match(patternConsul))
                {
                    formReserva.classList.remove("valid");
                    formReserva.classList.remove("invalid");

                    btnReserva.style.backgroundColor = "#fa7373"
                    emailReserva.style.outline = "2px solid #fa7373";
                } 
             
                if (mailValue === "")
                {
                    formReserva.classList.remove("valid");
                    formReserva.classList.add("invalid");
                    emailReserva.style.outline = "0px;" 
                    emailReserva.style.border = "0.5px solid var(--form-input-border)"; 
                }

              
}


