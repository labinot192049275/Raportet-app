//disable login buton until input form are filled
let loginrequirement = document.querySelectorAll(".col")
let loginButton = document.querySelector("#btn-login");
loginButton.disabled = true;
for(let i = 0; i < loginrequirement.length; i++){
    loginrequirement[i].addEventListener("input", loginbuttonState)
    };
    
    function loginbuttonState() {
        loginButton.disabled = Array.from(loginrequirement).some(x => x.value === '');

    }
