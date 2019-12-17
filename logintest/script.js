const loginEmail = document.querySelector(".email"),
    loginPassword = document.querySelector(".password"),
    loginButton = document.querySelector(".loginButton"),
    users = JSON.parse(localStorage.getItem("users")) || [];



function login(e, email, password) {
    let i = 0, failedLogin = true;
    for(i; i < users.length; i++) {
        if(email === users[i].email && password === users[i].password) {
            console.log(email, password);
            failedLogin = false;
            window.location.href = "user.html";
            return;
        }
    }
    if(failedLogin) console.log("Incorrect password")
}


loginButton.addEventListener("click", () => {login(event, loginEmail.value, loginPassword.value)});
