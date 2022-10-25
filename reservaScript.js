

let cinco = document.getElementById("5km")
cinco.addEventListener("change", five )

 let  diez = document.getElementById("10km")
diez.addEventListener("change", ten)

let  veintiCinco = document.getElementById("25km")
veintiCinco.addEventListener("change",twentyFive)

let  cincuenta = document.getElementById("50km")
cincuenta.addEventListener("change",fifty )  

let txtTotalPagar = document.getElementById("txtTotalPagar")

var montoPagar
let paisOrigen = "Argentina"
var km = 1


/* funcionresumen */

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

/* condicion dto */


/* 1 */
function five(){   
 montoPagar = 25
    km = 1
    console.log(km)

  
    funPaisOrigen(30,180)

    txtMontoPagar()
    function txtMontoPagar(){
        txtTotalPagar.textContent = "Total "+ msjDto +  montoPagar + " Usd"
    }
}
/* 2 */
function ten()
{
    montoPagar =  85
    km = 2
    console.log(km)



    funPaisOrigen(30,180)

        txtMontoPagar()
        function txtMontoPagar(){
            txtTotalPagar.textContent = "Total  " + msjDto +  montoPagar + " Usd"
        }
    
}
/* 3 */
function twentyFive()
{
    montoPagar =   125
    km = 3

    funPaisOrigen(30,180)

    txtMontoPagar()
    function txtMontoPagar(){
        txtTotalPagar.textContent = "Total  " + msjDto +  montoPagar + " Usd"
    }
}

/* 4 */
function fifty()
{
    montoPagar =  199
    km = 4

    funPaisOrigen(30,180)

    txtMontoPagar()
    function txtMontoPagar(){
        txtTotalPagar.textContent = "Total  " + msjDto +  montoPagar + " Usd"
    }
}







