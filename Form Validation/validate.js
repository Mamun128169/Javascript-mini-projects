const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

const validateName = () => {
    let name = document.getElementById("contact-name").value;
    let nameRegExp = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

    if (name.length == 0) {
        nameError.innerHTML = `Full is name required!`;
        return false;
    } 
    if (!nameRegExp.test(name)) {
        nameError.innerHTML = `Full is name required!`;
        return false;
    } 
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validatePhone = () => {
    let phone = document.getElementById("contact-phone").value;
    let phoneRegExp = /^[0-9]{10}$/;

    if (phone.length == 0) {
        phoneError.innerHTML = `Phone number is required!`;
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "10 digits phone number required!.";
        return false;
    }
    if (!phoneRegExp.test(phone)) {
        phoneError.innerHTML = "Only digits please!";
        return false;
    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validateEmail = () => {
    let email = document.getElementById('contact-email').value;
    let emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)?$/;

    if (email.length == 0) {
        emailError.innerHTML = `E-mail field is required!` 
        return false;
    } 
    if (!email.match(emailRegExp)) {
        emailError.innerHTML = `Invalid email address!`;
        return false;
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validatePassword = () => {
    let password = document.getElementById("contact-password").value;
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)([-_*&#\/|?]){0,2}[A-Za-z\d-_*&#\/|?]+$/;


    if (password.length == 0) {
        passwordError.innerHTML = `Password is required!`;
        return false;
    }
    if (password.length !== 8) {
        passwordError.innerHTML = `Password should be 8 characters long!`;
        return false;
    }
    if (!passwordRegExp.test(password)) {
        passwordError.innerHTML = `Password should have numbers, <br> special characters!`;
        return false;
    }
    passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validateMessage = () => {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = `${left} more characters are required!`;
        return false;
    }
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validateForm = () => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit!";

        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }

    alert(`Hey, ${document.getElementById("contact-name").value}. Your form is submitted successfully!!!`);
}