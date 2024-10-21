
function checkPassword() {
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    // Define the valid password
    const validPassword = "kainathaq123";

    // Check if the password matches
    if (password === validPassword) {
        messageElement.style.color = "blue";
        messageElement.textContent = "Password is valid.";
    } else {
        messageElement.style.color = "yellow";
        messageElement.textContent = "Password is Wrong. Please Enter the correct password.";
    }
}

function reset() {
    document.getElementById("password").value = "";
    document.getElementById("message").textContent = "";
}






















    

