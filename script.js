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
                var form = document.getElementById("form-news");
                var email = document.getElementById("email-news").value;


                var submit = document.getElementById("submit-news");

                 var text = document.getElementById("text"); 
                var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

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
                var formConsul = document.getElementById("form-consul");
            
                var emailConsul = document.getElementById("email-consul").value;
                var emailConsul2 = document.getElementById("email-consul");


                var submitConsul = document.getElementById("submit-consul");

              
                var patternConsul = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

                if (emailConsul.match(patternConsul))
                {
                    formConsul.classList.add("valid");
                    formConsul.classList.remove("invalid");
    
                    emailConsul2.style.border = "1.5px solid #2596be";
                    emailConsul2.style.outline = "1.5px solid #2596be";
                    
                  
                   
                }
                else
                {
                    formConsul.classList.remove("valid");
                    formConsul.classList.add("invalid");
                   
                    emailConsul2.style.border = "1.5px solid #fa7373";
                    emailConsul2.style.outline = "1.5px solid #fa7373";
                
                 
                }
                if (emailConsul == "")
                {
                    formConsul.classList.remove("valid");
                    formConsul.classList.remove("invalid");
               
                    emailConsul2.style.backgroundColor = "#ffff";
                    emailConsul2.style.outline = "1px solid #999";
                    emailConsul2.style.border = "1px solid #999";
                  
                }
}