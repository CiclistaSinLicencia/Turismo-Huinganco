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
let km = 1
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
}

function txtMontoPagar(){
    txtTotalPagar.textContent = "Total "+ msjDto +  montoPagar + " Usd"
}

/* select pais */
document.getElementsByTagName('select')[0].onchange = function() {
    var index = this.selectedIndex;
    var inputText = this.children[index].innerHTML.trim();

    paisOrigen = inputText
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







