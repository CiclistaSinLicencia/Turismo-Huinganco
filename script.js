/* themeToggle */
document.getElementById("theme").addEventListener
("change",() =>{
    document.body.classList.toggle("dark")
})

/* btn sound */
const audio = new Audio();
audio.src = "./audio/click.wav";

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
                    
                    emailConsul2.style.border = "1.5px solid #75b418";
                    emailConsul2.style.outline = "1.5px solid #75b418"
                    btnConsul.style.backgroundColor = " #75b418";;
                }
                else
                {
                    formConsul.classList.remove("valid");
                    formConsul.classList.add("invalid");
                  
                    emailConsul2.style.border = "1.5px solid #fa7373";
                    emailConsul2.style.outline = "1.5px solid #fa7373";
                    btnConsul.style.backgroundColor = " #fa7373";
                }
                if (emailConsul == "")
                {
                    formConsul.classList.remove("valid");
                    formConsul.classList.remove("invalid");
               
                    emailConsul2.style.backgroundColor = "#ffff";
                    emailConsul2.style.outline = "1px solid #999";
                    emailConsul2.style.border = "1px solid #999";
                    btnConsul.style.backgroundColor = " #75b418";;
                 
                }
}