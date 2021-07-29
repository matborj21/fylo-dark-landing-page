const btnEmail = document.querySelector('#btn-email');
const inputEmail = document.getElementById('email');
const error = document.querySelector('.error');


function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btnEmail.addEventListener('click', (e) => {
    let inputValue = inputEmail.value;
    e.preventDefault;
    if (!emailIsValid(inputValue)) {
        error.innerHTML = "Error! Please enter a valid email address."
        error.style.display = "block";
    } else {
        error.style.display = "none";
        inputEmail.value = "";
        alert('email is valid')
    }
})