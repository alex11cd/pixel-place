const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')

form.addEventListener('submit', (e) => {
    // e.preventDefault() prevent submit

    let errors = []

    if (firstname_input){
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        errors = getLoginFormErrors(username.value, password_input.value)
    }
})

function getSignupFormErrors(firstname, email, password, repeatPasssword){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
}
function password(password_input, repeat_password_input) {
    if (password_input === repeat_password_input) {
        console.log("Password correct ✅");
    } else {
        console.log("Password does not match ❌");
    }
}
form.addEventListener('submit', function(event) {
    event.preventDefault(); // ⛔ stops the form from reloading the page
    password(password_input.value, repeat_password_input.value);
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents page reload
    password(password_input.value, repeat_password_input.value);
});