
console.log("Test TEST");

document.addEventListener("DOMContentLoaded",

function(event) {

const BtnSubmit = document.getElementById('Btn-submit');

/*Funksioni per te e validuar fushat e formes */
const validate = (event) => {

const FirstName = document.getElementById('userid');
const lastname =document.getElementById('lastnameId');
const email=document.getElementById('email');
const username=document.getElementById('username');
const phone=document.getElementById('phone');
const date=document.getElementById('date');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirmpass');
const pwReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/


// if(){
//     document.getElementById('label').style.color = "red";
//     document.getElementById('label').style.opacity=100;
//     document.getElementById('label-lastname').style.color = "red";
//     document.getElementById('label-lastname').style.opacity=100;
//     document.getElementById('label-email').style.color="red";
//     document.getElementById('label-email').style.opacity=100;
//     document.getElementById('label-username').style.color="red";
//     document.getElementById('label-username').style.opacity=100; 

// }



if (FirstName.value === "" ) {

document.getElementById('label-emri').style.color = "red";
document.getElementById('label-emri').style.opacity=100;

// event.preventDefault();
 FirstName.focus();
return false;

}


if (lastname.value === "") {
document.getElementById('label-lastname').style.color = "red";
document.getElementById('label-lastname').style.opacity=100;
 lastname.focus();
// ngjarja.preventDefault();
return false;
}

if(email.value ===""){

    document.getElementById('label-email').style.color="red";
    document.getElementById('label-email').style.opacity=100;
    if(!email.value.match(mailformat)){
        alert("Email format incorrect");
       
        }
   
         email.focus();
        // event.preventDefault();

    return false;
    }
    


if(username.value === ""){

document.getElementById('label-username').style.color="red";
document.getElementById('label-username').style.opacity=100;
 username.focus();
// event.preventDefault();

return false;
}

if(phone.value === ""){

document.getElementById('label-phone').style.color="red";
document.getElementById('label-phone').style.opacity=100;
 phone.focus();
// event.preventDefault();
return false;
}

if(date.value === ""){

document.getElementById('label-date').style.color="red";
document.getElementById('label-date').opacity=100;
 date.focus();
// event.preventDefault();
return false;
}

if(password.value=== ""){

document.getElementById('label-password').style.color="red";
document.getElementById('label-password').style.opacity=100;
password.focus();
// event.preventDefault();

return false;

}
if(password.value.match(pwReg)){
    alert('correct pass format')
}

else{
    alert('password is not valid');

}
if(password.value !== confirmPassword.value){
    alert('not match values')
}

if(confirmPassword.value===""){

document.getElementById('label-confirmPassword').style.color="red";
document.getElementById('label-confirmPassword').style.opacity=100;

confirmPassword.focus();
// event.preventDefault();

return false;
}

return true; 
}




BtnSubmit.addEventListener('click', validate);
});


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var usernameVal="Labinot";
var passwordVal="labinot12345";