const form = document.querySelector('.sign-up-form');
const form_check = document.querySelector('#form_check');
const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const spaceRegex = /\s/;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

function hideTooltip() {
    $('[data-toggle="tooltip"]').tooltip('hide');
}

form.inputPassword.addEventListener('keyup', e =>{
    hideTooltip();
    if(form.inputPassword.value.length >= 8 && passwordPattern.test(form.inputPassword.value) && !spaceRegex.test(form.inputPassword.value)){
        form_check.classList = 'd-block alert alert-success mt-2 p-2';
        form_check.textContent = 'Your password meets minimum requirements';
    } else if(form.inputPassword.value.length >= 8){
        form_check.classList = 'd-block alert alert-danger my-2 p-2';
        form_check.innerHTML = 'Your password does not meet minimum requirements.'
    } else {
        form_check.classList = 'd-none';
    }
});

form.inputPasswordConfirm.addEventListener('keyup', e => {
    if(form.inputPasswordConfirm.value.length >= 8 && form.inputPasswordConfirm.value === form.inputPassword.value){
        form_check.classList = 'd-block alert alert-success my-2 p-2';
        form_check.textContent = 'Passwords matched!';
    } else if (form.inputPasswordConfirm.value.length >= 8 && form.inputPasswordConfirm.value !== form.inputPassword.value) {
        form_check.classList = 'd-block alert alert-danger my-2 p-2';
        form_check.innerHTML = 'Passwords not matched!';
    }
});