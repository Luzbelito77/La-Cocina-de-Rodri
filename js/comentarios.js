const nombreEl = document.querySelector('#nombre');
const emailEl = document.querySelector('#email');
const form = document.querySelector('#comentarios');


const checknombre = () => {
    let valid = false;
    const min = 3,
        max = 30;
    const nombre = nombreEl.value.trim();
        if (!isRequired(nombre)) {
        showError(nombreEl, 'Ingrese su Nombre.');
    } else if (!isBetween(nombre.length, min, max)) {
        showError(nombreEl, `El nombre debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(nombreEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Por Favor ingrese su Email.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email Invalido.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isnombreValid = checknombre(),
        isEmailValid = checkEmail();
    let isFormValid = isnombreValid &&
        isEmailValid ;
    if (isFormValid) {

    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'nombre':
            checknombre();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));