const guessinput = document.querySelector(".guessNumber"),
    attemptsButtons = document.querySelectorAll(".button"),
    easybutton = document.querySelector(".easy"),
    hardbutton = document.querySelector(".hard");

let i = 9, theNumber;

function randomNumber() {
    return Math.floor(Math.random() * 7777 + 1);
}

function guessTheNumber(e, attempts, dontguess) {
    if (attempts) i = attempts;
    if (e) e.preventDefault();
    const guess = parseInt(guessinput.querySelector(".numberinput").value);
    guessinput.querySelector(".numberinput").value = "";
    if (guess === "") return;
    if (dontguess) return;
    if (theNumber > guess && i > 0) {
        document.querySelector(".guessedlist").innerHTML += `<li>${guess} is too low!</li>`
        i--;
    } else if (theNumber < guess && i > 0) {
        document.querySelector(".guessedlist").innerHTML += `<li>${guess} is too high!</li>`
        i--;
    } else if (theNumber === guess) {
        gameWin(guess);
    } else if (i === 0 && guess !== theNumber) {
        guessinput.querySelector(".numberinput").value = "";
        document.querySelector(".lastguessed").innerHTML = `<h5>YOU LOSE</h5><h4>YOU LOSE</h4><h3>YOU LOSE</h3><h2>YOU LOSE</h2><h1>YOU LOSE</h1><h1>${theNumber} WAS THE NUMBAH!!!</h1>`;
        document.querySelector(".lastguessed").style.gridColumn = "1/3";
        document.querySelector(".numberguess").style.display = "none";
    }
}

function setattempts(e, aorb) {
    document.querySelector(".lastguessed").style.gridColumn = "2/3";
    document.querySelector(".numberguess").style.display = "block";
    document.querySelector(".lastguessed").style.background = "pink";
    guessinput.querySelector(".numberinput").value = "";
    theNumber = randomNumber();
    document.querySelector(".lastguessed").innerHTML = "<h3>Your last guesses:</h3><ol class='guessedlist'></ol>"
    if (aorb === "easy") {
        guessTheNumber(e, 9);
        document.querySelector(".hard").style.background = "darkred";
        document.querySelector(".easy").style.background = "lightgreen";
    } else {
        guessTheNumber(e, 4);
        document.querySelector(".hard").style.background = "red";
        document.querySelector(".easy").style.background = "darkgreen";
    }
}

function gameWin() {
    document.querySelector(".lastguessed").style.gridColumn = "1/3";
    document.querySelector(".lastguessed").style.background = "green";
    document.querySelector(".numberguess").style.display = "none";
    document.querySelector(".lastguessed").innerHTML = `<h2>YOU WON!!!</h2><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li><li>${theNumber} WAS THE NUMBAH!!!!</li>`
}

guessinput.addEventListener("submit", guessTheNumber);
attemptsButtons.forEach(button => button.addEventListener("click", function (e) {
    setattempts("", e.target.value);
}));
setattempts("", "easy");