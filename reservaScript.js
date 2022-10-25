

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
let paisOrigen = "Argentina"

/* select pais */
document.getElementsByTagName('select')[0].onchange = function() {
    var index = this.selectedIndex;
    var inputText = this.children[index].innerHTML.trim();

    paisOrigen = inputText
  }
 

/* condicion dto */


/* cards */
function five(){   
 montoPagar = 25
    
 txtTotalPagar.textContent = "Total a pagar: " +  montoPagar + " Usd"

/*     console.log("el pais de origen es " + paisOrigen); */
    console.log("Total a pagar: " +montoPagar);

    if(paisOrigen === "Argentina"){
        
            montoPagar = montoPagar * -30  / 100 + montoPagar
            console.log("Dto por ser Argentino " + montoPagar)
        
    }
    if(paisOrigen === "Chile")
        {
            
                montoPagar = montoPagar * 180 / 100  + montoPagar
                alert("Chileno weon pagas mas caro " + montoPagar)
        
        }

    txtMontoPagar()
    function txtMontoPagar(){
        txtTotalPagar.textContent = "Total a pagar: " +  montoPagar + " Usd"
    }
}

function ten()
{
    montoPagar =  85
    let txtAlert =  txtTotalPagar.textContent = "Total a pagar: " +  montoPagar + " Usd"
    /*     console.log("el pais de origen es " + paisOrigen); */
        console.log("Total a pagar: " +montoPagar);
        msjDto = ""
        if(paisOrigen === "Argentina"){
        
                montoPagar = montoPagar * -30  /100 + montoPagar
                console.log("Dto por ser Argentino " + montoPagar)
                msjDto = " tenes descuento de " + montoPagar
        }
        

        txtMontoPagar()
        function txtMontoPagar(){
            txtTotalPagar.textContent = "Total a pagar: " +  montoPagar + " Usd" + msjDto
        }
    
}
function twentyFive()
{
    montoPagar =   125
    let txtAlert =  txtTotalPagar.textContent = "Total a pagar: " +  montoPagar+ " Usd"
    console.log("Total a pagar: " +montoPagar);

  
}
function fifty()
{
    montoPagar =  199
    let txtAlert =  txtTotalPagar.textContent = "Total a pagar: " +  montoPagar+ " Usd"
    console.log("Total a pagar: " + montoPagar);
}




//elegir precio por input
/* 
5 25$
10 85$
25 125$
50 199$
*/