const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const dbuttons = document.querySelectorAll(".button");
const lbuttons = document.querySelectorAll(".lbutton");
const leaderboard = document.querySelector(".theleaderBoard");
const lederberds = leaderboard.querySelectorAll(".lederberd");
const timer = document.querySelector(".timer");
const theList = document.querySelector(".theList");
const lederEasy = document.querySelector(".listEasy");
const lederNormal = document.querySelector(".listNormal");
const lederHard = document.querySelector(".listHard");
const lederInsane = document.querySelector(".listInsane");
const lederGODMode = document.querySelector(".listGODMode");






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

function startGame(timeToPlay, popMin, popMax, difficulty) {
    let chosenDifficulty = `${"leaderboard"}${difficulty}`;
    name = document.querySelector(".inputtext").value;
    displayLeaderboard("", chosenDifficulty);
    if (!name) {
        document.querySelector("h2").style.color = "red";
        alert("Choose your name!");
        return;
    }
    document.querySelector("h2").style.color = "black";
    chosenDifficulty = difficulty;
    dbuttons.forEach(button => button.setAttribute("disabled", ""));
    dbuttons.forEach(button => document.querySelector(".inputtext").disabled = true);
    timeUp = false;
    scoreBoard.textContent = 0;
    score = 0;
    theTimer(0, timeToPlay);
    setTimeout(() => pop(popMin, popMax), 6000);
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => gameOver(chosenDifficulty), popMax);
    }, (timeToPlay + 0) * 1000);
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
        displayTimer(timeLeft, timeToPlay);
        timeLeft--;
    }, 1000);
}

function displayTimer(seconds, timeToPlay) {
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

function gameOver(difficulty) {
    score = scoreBoard.textContent;
    name = document.querySelector(".inputtext").value;
    clearInterval(countdown);
    timer.textContent = "Game is now over and you got a score of: " + score;
    dbuttons.forEach(button => button.removeAttribute("disabled"));
    dbuttons.forEach(button => document.querySelector(".inputtext").disabled = false);
    updateLeaderboard("", name, score, difficulty);
}

function updateLeaderboard(e, name, score, difficulty) {
    const easyList = JSON.parse(localStorage.getItem("easyList")) || [];
    const normalList = JSON.parse(localStorage.getItem("normalList")) || [];
    const hardList = JSON.parse(localStorage.getItem("hardList")) || [];
    const insaneList = JSON.parse(localStorage.getItem("insaneList")) || [];
    const godmodeList = JSON.parse(localStorage.getItem("godmodeList")) || [];
    difficulty = `list${difficulty}`;
    let i = 0;
    for(i; i < hardList.length; i++) {
        lederHard.innerHTML += `<li>${hardList[i]}</li>`
    }
    if (difficulty === "listEasy") {
        lederEasy.innerHTML = "";
        easyList.push([name, score]);
        for (i; i < easyList.length; i++) {
            easyList.sort((a, b) => b[1] - a[1]);
            if (easyList.length > 3) {
                easyList.splice(3);
            }
            lederEasy.innerHTMtext += `<li>${easyList[i]}</li>`;
            localStorage.setItem("easyList", JSON.stringify(easyList));
        }
    } else if (difficulty === "listNormal") {
        lederNormal.innerHTML = "";
        normalList.push([name, score]);
        for (i; i < normalList.length; i++) {
            normalList.sort((a, b) => b[1] - a[1]);
            if (normalList.length > 3) {
                normalList.splice(3);
            }
            lederNormal.innerHTML += `<li>${normalList[i]}</li>`;
            localStorage.setItem("normalList", JSON.stringify(normalList));
        }
    } else if (difficulty === "listHard") {
        lederHard.innerHTML = "";
        hardList.push([name, score]);
        for (i; i < hardList.length; i++) {
            hardList.sort((a, b) => b[1] - a[1]);
            if (hardList.length > 3) {
                hardList.splice(3);
            }
            lederHard.innerHTML += `<li>${hardList[i]}</li>`;
            localStorage.setItem("hardList", JSON.stringify(hardList));
        }
    } else if (difficulty === "listInsane") {
        lederInsane.innerHTML = "";
        insaneList.push([name, score]);
        for (i; i < insaneList.length; i++) {
            insaneList.sort((a, b) => b[1] - a[1]);
            if (insaneList.length > 3) {
                insaneList.splice(3);
            }
            lederInsane.innerHTML += `<li>${insaneList[i]}</li>`;
            localStorage.setItem("insaneList", JSON.stringify(insaneList));
        }
    } else if (difficulty === "listGODMode") {
        lederGODMode.innerHTML = "";
        godmodeList.push([name, score]);
        for (i; i < godmodeList.length; i++) {
            godmodeList.sort((a, b) => b[1] - a[1]);
            if (godmodeList.length > 3) {
                godmodeList.splice(3);
            }
            lederGODMode.innerHTML += `<li>${godmodeList[i]}</li>`;
            localStorage.setItem("godmodeList", JSON.stringify(godmodeList));
        }
    }
}

function displayLeaderboard(e, difficulty) {
    let clickedButtonValue = difficulty || `${"leaderboard"}${this.textContent}`;
    let leader = lederberds;
    let i = 0;
    for (i = 0; i < lederberds.length; i++) {
        if (leader[i].classList.contains(clickedButtonValue)) {
            leader[i].classList.add("active");
        } else {
            leader[i].classList.remove("active");
        }
    }
}

moles.forEach(mole => mole.addEventListener("click", hitMole));
lbuttons.forEach(button => button.addEventListener("click", displayLeaderboard, "", this.textContent));
updateLeaderboard("", "", "", "Easy");