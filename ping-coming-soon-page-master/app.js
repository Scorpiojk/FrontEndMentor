const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorElement.innerHTML = "Please provide a valid email address";
        email.style.border = "1px solid red"
        e.preventDefault()
    }
})
