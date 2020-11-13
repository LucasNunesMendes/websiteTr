/* Recuperar a senha */

/* envio de email */

let submitEmail =  document.querySelector('button[type=submit]');
let email = '';

submitEmail.addEventListener('click',()=>{

    email = submitEmail.value;

})

console.log(email);