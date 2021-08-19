const email = document.querySelector('.email');
const form = document.querySelector('#form');
const emailMessage = document.querySelector('.invalid-email-message');
const errorIcon = document.querySelector('.error-icon');

form.addEventListener('submit', e => {
    e.preventDefault();
    if(email.value){
        const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
        if (!regexMatch) {
            emailMessage.style.display = "block";
            errorIcon.style.display = "block";
            email.style.border = "1px solid #de6c6c";
            emailMessage.innerText = "Please provide a valid email";
        }
        else {
            emailMessage.style.display = "none";
            errorIcon.style.display = "none";
            email.style.border = "1px solid hsl(0, 36%, 70%)";
        }
    } else {
        emailMessage.style.display = "block";
        errorIcon.style.display = "block";
        emailMessage.innerText = "Input is empty";
    }
});