const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nom esta vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha seu nome!");
        return;
    }
    //verifica se email esta preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha seu email");
        return;
    }
    //verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 dígitos.");
        return;
    }
    //verifica se job foi selecionado
    if(jobSelect.value === ""){
        alert("Por favor, selecione sua situação");
        return;
    }
    //verifica se a mensagem esta preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem");
    }
    //se todos os campos estiverem corretamente preenchidos, envie o flowFrom: 
    form.submit();
});
//função que valida email
function isEmailValid(email){
    //cria regex para validar email
    const emailRegex = new RegExp(
        //USUARIO@HOST.COM.BR
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}
// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits){
        //senha válida
        return true;
    }
    //senha inválida
    return false;
}