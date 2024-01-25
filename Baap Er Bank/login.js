document.getElementById("logIn").addEventListener('click', function() {
    const emailField = document.querySelector("#userEmail");
    const email = emailField.value;

    const passwordField = document.querySelector("#userPassword");
    const password = passwordField.value;

    if (email == "mamun@hossain.com" && password == "amar nam mamun") {
        window.location.href = "bank.html";
    } else if(email == "" || password == "") {
        alert("Fields cannot be empty!");
    } else {
        alert("Invalid user Email or user Password!");
    }
});