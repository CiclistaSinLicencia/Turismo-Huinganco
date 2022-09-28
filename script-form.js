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
                    submit.style.backgroundColor = " #fa7373";
                }
                if (email == "")
                {
                    form.classList.remove("valid");
                    form.classList.remove("invalid");
                    text.innerHTML = "";
                    text.style.color = "#b8ff5c"
                    submit.style.backgroundColor = " #75b418";
                }
}