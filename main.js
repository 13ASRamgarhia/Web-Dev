function checkInputs(){
    const form = document.getElementById("signupform").value;
    const username = document.getElementById("userS").value;
    const emailID = document.getElementById("emailS").value;
    const phoneNumber = document.getElementById("phoneS").value;
    const password = document.getElementById("passS").value;
    const cnfrm_pass = document.getElementById("cnfrm-passS").value;

    if(username == ""){
        setErrorFor("Username cannot be empty");
    }
    else{
        setSuccessFor(username);
    }
}

function setErrorFor(message){
    var small = document.getElementById("s1");
    small.textContent = message;
    small.style.visibility = "visible";
    form.preventDefaults();
}

function setSuccessFor(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

