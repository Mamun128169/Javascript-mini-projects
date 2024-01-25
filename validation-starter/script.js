const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

const validateName = () => {
    let name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = `Name is required!`;
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name!";
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validatePhone = () => {
    let phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = `Phone number is required!`;
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digits!";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please!";
        return false;
    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

const validateEmail = () => {
    let email = document.getElementById("contact-email").value;
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)?$/;

    if (email.length == 0) {
        emailError.innerHTML = "email is required!";
        return false;
    }
    if (!email.match(emailRegex)) {
        emailError.innerHTML = "Invalid Email Address!";
        return false;
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}


const validateMessage = () => {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = `${left} more characters required!`;
        return false;
    }
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

}

const validateForm = () => {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to submit!";
        
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
}