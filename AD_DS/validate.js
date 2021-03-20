const form = document.querySelector(".container");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const emailid = document.getElementById("emailid");
const password = document.getElementById("pass1");
const confirmpassword = document.getElementById("confirmpass");
const phoneno = document.getElementById("phno");
const submitbtn = document.querySelector(".submit");

// Function to check if first name is entered properly
function checkfname(fname) {
    let letters = /^[A-Z]+[a-z]+$/;
    if (fname.match(letters)) {

        document.getElementById("firstnameerror").innerHTML = "";
        return fname;

    }

    else {
        document.getElementById("firstnameerror").innerHTML.style = "Please enter the details accurately";
        return false;

    }

}

// Function to check if first name is entered properly

function checklname(lname) {
    let letter = /^[A-Z]+[a-z]+$/;
    if (lname.match(letter)) {

        document.getElementById("lastnameerror").innerHTML = "";
        return lname;

    }

    else {
        document.getElementById("lastnameerror").innerHTML = "Please enter the details accurately";
        return false;
    }
}

//function to check if the password is entered properly

function passcheck(pass) {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (pass.match(paswd)) {
        document.getElementById("passerror").innerHTML = "";
        return pass;

    }
    else {
        document.getElementById("passerror").innerHTML = "Entered password does not meet the requirements";
        return false;

    }
}

function phonecheck(phval) {
    var phonecheck = /\+?\d[\d -]{8,12}\d/;
    if (phval.match(phonecheck)) {
        document.getElementById("phoneerror").innerHTML = "";
        return phval;
    }
    else {
        document.getElementById("phoneerror").innerHTML = "Please enter a valid phone number";
        return false;
    }
}

// Function to check if all parameters have been entered

function testfunc() {
    if (firstname.value == "") {
        document.getElementById("firstnameerror").innerHTML = "Please enter your first name";

    }
    else {

        firstname.value = checkfname(firstname.value);

    }

    if (lastname.value == "") {
        document.getElementById("lastnameerror").innerHTML = "Please enter your last name";
    }

    else {

        lastname.value = checklname(lastname.value);

    }
    if (emailid.value == "") {
        document.getElementById("emailerror").innerHTML = "Please enter your E-mail ID";

    }

    else {
        document.getElementById("emailerror").innerHTML = "";

    }
    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "Please enter a password";
    }

    else {
        password.value = passcheck(password.value);
    }

    if (confirmpassword.value == "") {
        document.getElementById("passerror2").innerHTML = "Enter the password again"
    }

    else if (confirmpassword.value == password.value) {
        document.getElementById("passerror2").innerHTML = "";
        document.getElementById("passerror").innerHTML = "";

    }

    else {
        document.getElementById("passerror2").innerHTML = "Passwords do not match";
    }

    if (phoneno.value == "") {
        document.getElementById("phoneerror").innerHTML = "Please enter your mobile number";
    }

    else {
        phoneno.value = phonecheck(phoneno.value);
    }
}


function collegeredirect() {
    window.location.href = "Personal.html";
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    testfunc();
    if (firstname.value != "" && lastname.value != "" && emailid.value != "" && password.value != "" && confirmpassword.value != "" && phoneno.value != "") {
        collegeredirect();
    }

}

)