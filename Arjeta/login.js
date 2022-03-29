// inputs
const nameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirm_pwInput = document.getElementById('confirm_pw');
const birthdayInput = document.getElementById('birthday');
const genderInput = document.getElementsByName('gender');

let genders = genderInput.value

console.log(genders);

// btn and errors
let btn = document.getElementById('submit');
let message = document.getElementsByTagName('small');

// ++ functions
function setError(input, message) {
    const formControl = input.parentElement
    const error = formControl.querySelector('small');

    error.style.display = 'block';
    error.innerText = message;
}

// btn random colors
function changeColor() {
    let random = Math.floor(Math.random() * 16777216).toString(16);
    btn.style.backgroundColor = `#${random}`
}

// name validation
function nameValid() {
    let name = nameInput.value;
    if (name === '') {
        setError(nameInput, 'This information is required!')
    }
}

// lastname validation
function lastnameValid() {
    let lastname = lastnameInput.value;
    if (lastname === '') {
        setError(lastnameInput, 'This information is required!')
    }
}

// email validation
function emailValid() {
    let email = emailInput.value;
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (email == '' || email === emailRegex) {
        setError(emailInput, 'This information is required!')
    }
    else if (email !== emailRegex) {
        setError(emailInput, 'Wrong email format!')
    }
}

// phone number validation
function phoneValid() {
    const phoneReg = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/

    let phone = phoneInput.value;

    if (phone === '') {
        setError(phoneInput, 'This information is required!')
    }
}

// password validation
function pwValid() {
    const pwReg = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
    let password = passwordInput.value;
    let password2 = confirm_pwInput.value;

    if (password == '') {
        setError(passwordInput, 'Password cannot be empty!')
    }
    else if (password != pwReg) {
        setError(passwordInput, 'Wrong password format!')
    }
    else if (password != password2) {
        setError(confirm_pwInput, 'Passwords do not match!')
    }
}

// birthday validation
function birthdayValid() {
    let birthday = birthdayInput.value;
    if (birthday === '') {
        setError(birthdayInput, 'This information cannot be empty!')
    }
}

function genderValid() {
    let count = 0;
    for (i = 0; i < genderInput.length; i++) {
        if (genderInput[i].value === 'on') {
            count++;
        }
    }

    if (count > 1) {
        setError(genderInput[0], "This information is required!")
    }
}

function submitAll() {
    nameValid();
    lastnameValid();
    emailValid();
    changeColor();
    phoneValid();
    pwValid();
    birthdayValid();
    genderValid();
}

// btn.addEventListener('click', function (e) {
//     e.preventDefault();

//     submitAll();
// });

var elements = document.getElementsByClassName("input");
var data = {};

for (var element of elements) {
    element.addEventListener("keyup", function (e) {
        e.preventDefault();
        data[e.target.name] = e.target.value;
        console.log(data);
        if (e.target.name == "firstname") {
            var text =/^$/;;
            var color = "";
            var message = "";
            var display = "";
            var margin ="";
            var lbl = document.getElementById("message");
            if (!text.test(e.target.value)) {
                message = "Emri nuk eshte valid";
                lbl.classList.remove("hidden");

                display = "block"
                color = "red";
                margin = "70px";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;
            lbl.style.display = display;
            lbl.style.margin = margin-left;

        }
        if (e.target.name == "lastname") {
            var textReg = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
            var color = "";
            var message = "";
            var display = "";
            var margin ="";
            var lbl = document.getElementById("message1");
            if (!textReg.test(e.target.value)) {
                message = "Mbiemri nuk eshte valid";
                lbl.classList.remove("hidden");

                display = "block"
                color = "red";
                margin = "70px";

            }
            lbl.innerHTML = message;
            lbl.style.color = color;
            lbl.style.display =margin-left;

        }
    });

}


