var loginForm = document.getElementById("login-form");
var username = document.getElementById("username");
var password = document.getElementById("password");
var errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var usernameValue = username.value.trim();
    var passwordValue = password.value;
    errorMessage.innerHTML="";
    errorMessage.style.display="none";

    console.log(usernameValue,passwordValue);

    if (usernameValue == '') {
        // afficher un message d'error;
        username.style.border="1px solid red";
    }else{
        username.style.border="1px solid #ced4da";
    }

    if (passwordValue == '') {
        // afficher un message d'error;
        password.style.border="1px solid red";
    }else{
        password.style.border="1px solid #ced4da";
    }

    if ((usernameValue != '') && (passwordValue!='')) {
        // strat testing locally or on server

        if (usernameValue == 'admin' && passwordValue=='admin') {
            // coonected

            localStorage.setItem("token",new Date().getTime());
            window.location = "index.html";
        }else{
            // error wrond data
            console.log("err");
            errorMessage.innerHTML="Wrong username or password, please try again.";
            errorMessage.style.display="block"
        }

    }
    

})