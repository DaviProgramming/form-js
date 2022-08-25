

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('passwordtwo')



form.addEventListener('submit', (e) =>{
    
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmpasswordValue = confirmpassword.value.trim()

    if(username.value === ''){
        //mostrar erro
        //adicionar a classe error
        errorValidation(username, ' Preencha este campo')
    }
    else{
        //adicionar a classe de sucesso
        sucessValidation(username)
    }
}

function errorValidation(input, messages){
    const formControl = input.parentElement;
    const OtherControl = formControl.parentElement;
    const small = OtherControl.querySelector('small')
    small.style.display = "flex";
    small.innerText = messages ;
    OtherControl.className = "form-control error"
}

function sucessValidation(input){
    const formControl = input.parentElement;
    const OtherControl = formControl.parentElement;
    const small = OtherControl.querySelector('small')
    small.style.display = "none";
    
    OtherControl.className = "form-control sucess"
}