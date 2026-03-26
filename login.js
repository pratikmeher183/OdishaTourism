function showSignup() {
    document.getElementById("signupBox").style.display = "block";
}

function createAccount() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem(email, JSON.stringify(user));
    document.getElementById("message").innerText =
        "Account created successfully";
    document.getElementById("message").style.color = "green";
}

function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let user = JSON.parse(localStorage.getItem(email));
    if (user == null) {
        document.getElementById("message").innerText =
            "User not found";
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
    }
    else if (user.password === password) {
        document.getElementById("message").innerText =
            "Login successful";
        document.getElementById("message").style.color = "rgb(246, 131, 7)";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
    }
    else {
        document.getElementById("message").innerText =
            "Wrong password";
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontWeight = "bold";
        document.getElementById("message").style.fontSize = "18px";
    }
}