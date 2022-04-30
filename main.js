const form = document.getElementById("signupform");
const username = document.getElementById("userS");
const emailID = document.getElementById("emailS");
const phoneNumber = document.getElementById("phoneS");
const password = document.getElementById("passS");
const cnfrm_pass = document.getElementById("cnfrm-passS");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailIDValue = emailID.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const cnfrm_passValue = cnfrm_pass.value.trim();

    if(usernameValue === ""){
        setErrorFor(username, "Username cannot be empty");
    }
    else{
        setSuccessFor(username);
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}