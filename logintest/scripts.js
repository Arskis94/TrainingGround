const logoutButton = document.querySelector(".logoutButton"),
    addMemberButton = document.querySelector(".addMemberButton"),
    date = new Date(),
    currentDate = document.querySelector(".currentDate"),
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];




currentDate.innerHTML = `${days[date.getDay()]}  ${date.getDay() + 1}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
setInterval(() => {
    currentDate.innerHTML = `${days[date.getDay()]} ${date.getDay() + 1}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`
}, 1000);

function logout() {
    console.log("logging out?")
    window.location.href = "index.html";
}

function addMemberForm() {
    document.querySelector(".addMemberForm").style.display = "block";
    addMemberButton.style.display = "none"
}

function markIn() {
    document.querySelector(".marking").innerHTML = `<p>Mark out</p><button class="markOutButton" type="button">MARK OUT!</button>`;
    markOutButton = document.querySelector(".markOutButton");
    markOutButton.addEventListener("click", markOut);
}

function markOut() {
    console.log("ok?")
    document.querySelector(".marking").innerHTML = `<p>Mark in</p><button class="markInButton" type="button">MARK IN!</button>`
    markInButton = document.querySelector(".markInButton");
    markInButton.addEventListener("click", markIn);
}

logoutButton.addEventListener("click", logout);
addMemberButton.addEventListener("click", addMemberForm);
