let claimBtn = document.querySelector('.claim-btn')
let inputs = document.querySelectorAll('.input')
let email = document.getElementById('email')
let emailError = document.getElementById('error-email')

claimBtn.addEventListener('click', validateSubmit)
resetInput()

function validateSubmit(){    
    inputs.forEach(input => {
        let textInput = input.querySelector('.text-input')
        if (textInput.value=="") {
            input.classList.add ('blank-value')
        }
        showError(input)
    })
    validateSubmitEmail()
}

function resetInput(){
    inputs.forEach(input => {
        let textInput = input.querySelector('.text-input')
        textInput.addEventListener('focus', () => {
            if (input.classList.contains('blank-value')) {
                input.classList.remove ('blank-value')
            }
            showError(input)
            
            if(textInput.classList.contains('error-email')){
                textInput.classList.remove('error-email')
                emailError.style.display = 'none'
            }
        })

    })
}
function showError(input) {
    let errorIcon = input.querySelector('.error-icon')
    let errorMsg = input.querySelector('.error-msg')
    let textInput = input.querySelector('.text-input')

    if(input.classList.contains('blank-value')){
        errorIcon.style.display = 'block'
        errorMsg.style.display = 'block'
        textInput.classList.add ('error-display')
    }else{
        errorIcon.style.display = 'none'
        errorMsg.style.display = 'none'
        textInput.classList.remove('error-display')
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}

function validateSubmitEmail() {
    if (!email.value){return}
    console.log (email.value)
    if(!validateEmail(email.value)){
        email.classList.add('error-email')
        emailError.style.display = 'block'
    }
}

