let emailAddress = document.querySelector('.input-email')
let submitBtn = document.querySelector('.input-btn')
let errorText = document.querySelector('.error-text')
let errorIcon = document.querySelector('.error-icon')

submitBtn.addEventListener('click', emailValidation)
emailAddress.addEventListener('click', resetInput)


function isValidEmail (email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function emailValidation(){
    if(!isValidEmail(emailAddress.value)){
        // show error
        errorText.style.display = "block"
        errorIcon.style.display = "block"
        emailAddress.style.border = "2px solid hsl(0, 93%, 68%)"
    }
}

function resetInput() {
    if(errorText.style.display == "block") {
        emailAddress.value = ""
        
        errorText.style.display = "none"
        errorIcon.style.display = "none"
        emailAddress.style.border = "0.5px solid hsla(0, 36%, 70%, 0.5)"
    }
}