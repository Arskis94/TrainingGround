const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const scoreboard = JSON.parse(localStorage.getItem("items")) || [];
const dbuttons = document.querySelectorAll(".button");
const lbuttons = document.querySelectorAll(".lbutton");
const leaderboard = document.querySelector(".theleaderBoard");
const lederberds = leaderboard.querySelectorAll(".lederberd");
const timer = document.querySelector(".timer");


let lastHole;
let timeUp = false;
let score = 0;
let countdown;

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const holeIndex = Math.floor(Math.random() * holes.length);
    const hole = holes[holeIndex];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function pop(popMin, popMax) {
    const time = randomTime(popMin, popMax);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) pop(popMin, popMax);
    }, time);
}

function startGame(timeToPlay, popMin, popMax) {
    name = document.querySelector(".inputtext").value;
    if (!name) {
        document.querySelector("h2").style.color = "red";
        alert("Choose your name!");
        return;
    }
    document.querySelector("h2").style.color = "black";

    dbuttons.forEach(button => button.setAttribute("disabled", ""));
    timeUp = false;
    scoreBoard.textContent = 0;
    score = 0;
    theTimer(5, timeToPlay);
    setTimeout(() => pop(popMin, popMax), 6000);
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => gameOver(), popMax);
    }, (timeToPlay + 6) * 1000);
}

function hitMole(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
}

function theTimer(seconds, timeToPlay) {
    clearInterval(countdown);
    let timeLeft = timeToPlay + seconds;

    countdown = setInterval(() => {
        if (timeLeft === -1) {
            clearInterval(countdown);
            return;
        }
        console.log(timeLeft);
        displayTimer(timeLeft, timeToPlay);
        timeLeft--;
    }, 1000);
}

function displayTimer(seconds, timeToPlay) {
    //display the time before the game starts
    if (seconds > timeToPlay) {
        timer.textContent = seconds - timeToPlay
    } else if (seconds === timeToPlay) {
        timer.textContent = "GOGOGO!";
    } else if (seconds < timeToPlay) {
        timer.textContent = seconds;
    } else {
        gameOver();
    }
}

function gameOver() {
    clickedButtonValue = `${"leaderboard"}${this.textContent}`;
    score = scoreBoard.textContent;
    clearInterval(countdown);
    timer.textContent = "Game is now over and your score is :" + score;
    dbuttons.forEach(button => button.removeAttribute("disabled"));
    updateLeaderboard(name, score, clickedButtonValue);
}

function updateLeaderboard(name, score, difficulty) {
    let clickedButtonValue = `${"leaderboard"}${this.textContent}`;
    let leaderi = this.value;
    let leader = lederberds;
    leader[0].classList.add("active");
    let i = 0;
    for (i; i < lederberds.length; i++) {
        if (leader[i].classList.contains(clickedButtonValue)) {
            leader[i].classList.add("active");
        } else {
            leader[i].classList.remove("active");
        }
    }
    if (leader[0].classList.contains(clickedButtonValue)) {
        console.log("OK");
    }
    //console.log(lederberds.classList.contains("leaderboardEasy"));

    //lederberds.leaderboardEasy.innerHTML = "<li>name, score</li>";
}

moles.forEach(mole => mole.addEventListener("click", hitMole));
lbuttons.forEach(button => button.addEventListener("click", updateLeaderboard));

