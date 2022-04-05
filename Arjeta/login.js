
var elements = document.getElementsByClassName("input");
var password = document.getElementById("password");
password.addEventListener("keyup", passValidation);
var confirmPass = document.getElementById("confirmpass");
confirmPass.addEventListener("keyup", passConfirm);

var button = document.getElementById("btn");
button.addEventListener("click", function (e) {
    e.preventDefault();
    location.href = "login.html";
});

var data = {};

for (var element of elements) {
    element.addEventListener("keyup", function (e) {
        e.preventDefault();
        data[e.target.name] = e.target.value;
        if (e.target.name == "firstname") {
            var text = /^$|^.*@.*\..*$/;
            var color = "";
            var message = "";
            var lbl = document.getElementById("message");
            if (text.test(e.target.value)) {
                message = "Emri nuk eshte valid";
                lbl.classList.remove("hidden");
                color = "red";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;

        }
        if (e.target.name == "lastname") {
            var textReg = /^$|^.*@.*\..*$/;
            var color = "";
            var message = "";
            var lbl = document.getElementById("message1");
            if (textReg.test(e.target.value)) {
                message = "Mbiemri nuk eshte valid";
                lbl.classList.remove("hidden");
                color = "red";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;

        }
        if (e.target.name == "email") {
            var textReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            var color = "";
            var message = "";
            var lbl = document.getElementById("message2");
            if (!textReg.test(e.target.value)) {
                message = "Email nuk eshte valide";
                lbl.classList.remove("hidden");
                color = "red";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;

        }
        if (e.target.name == "username") {
            var textReg = /^([a-zA-Z0-9]|[-._](?![-._])){2,20}$/;
            var color = "";
            var message = "";
            var lbl = document.getElementById("message7");
            if (!textReg.test(e.target.value)) {
                message = "Username nuk eshte valid";
                lbl.classList.remove("hidden");

                color = "red";
            }
            lbl.innerHTML = message;
            lbl.style.color = color;
        }
        if (e.target.name == "phone") {
            var textReg = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
            var color = "";
            var message = "";
            var lbl = document.getElementById("message3");
            if (!textReg.test(e.target.value)) {
                message = "Numri i telefonit nuk eshte valid";
                lbl.classList.remove("hidden");
                color = "red";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;
        }
        if (e.target.name == "birthday") {
            var textReg = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
            var color = "";
            var message = "";
            var lbl = document.getElementById("message6");
            if (!textReg.test(e.target.value)) {
                message = "Enter date in dd/MM/yyyy format ONLY.";
                lbl.classList.remove("hidden");
                color = "red";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;
        }
        enabledButton()
    });

}

function passValidation() {
    var passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var passColor = "";
    if (!passReg.test(password.value)) {
        setError(password, 'Password jovalid')
        document.getElementById("message4").innerHTML = "Password jovalid! ";
        document.getElementById("message4").classList.remove("hidden");
        passColor = "red";
        document.getElementById("message4").style.color = passColor;
    }
    enabledButton()
}

function passConfirm() {
    var color = "";
    if (
        confirmPass.value !=
        password.value
    ) {
        document.getElementById("message5").innerHTML = "Passwordi nuk perputhet.";
        document.getElementById("message5").classList.remove("hidden");
        color = "red";
        document.getElementById("message5").style.color = color;
    }
    enabledButton()
}
function enabledButton() {
    for (var element of elements) {

        if (element.value == "") {

            document.getElementById("btn").disabled = true;
        }
        else {
            document.getElementById("btn").disabled = false;
        }
    }
}