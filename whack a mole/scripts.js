const holes = document.querySelectorAll('.hole'),
scoreBoard = document.querySelector('.score'),
moles = document.querySelectorAll('.mole'),
dbuttons = document.querySelectorAll(".button"),
lbuttons = document.querySelectorAll(".lbutton"),
leaderboard = document.querySelector(".theLeaderboard"),
leaderboards = leaderboard.querySelectorAll(".leaderboard"),
timer = document.querySelector(".timer"),
theList = document.querySelector(".theList"),
easyLeader = document.querySelector(".easyList"),
normalLeader = document.querySelector(".normalList"),
hardLeader = document.querySelector(".hardList"),
insaneLeader = document.querySelector(".insaneList"),
godmodeLeader = document.querySelector(".godmodeList");

let lastHole, timeUp = false, score = 0, countdown;

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const holeIndex = Math.floor(Math.random() * holes.length),
    hole = holes[holeIndex];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function pop(popMin, popMax) {
    const time = randomTime(popMin, popMax),
    hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) pop(popMin, popMax);
    }, time);
}

function startGame(timeToPlay, popMin, popMax, difficulty) {
    displayLeaderboard("", difficulty);
    name = document.querySelector(".inputtext").value;
    if (!name) {
        document.querySelector("h2").style.color = "red";
        alert("Choose your name!");
        return;
    }

    timer.textContent = "Prepare to whack dem moles!!!";
    document.querySelector("h2").style.color = "black";
    dbuttons.forEach(button => button.setAttribute("disabled", ""));
    timeUp = false;
    scoreBoard.textContent = 0;
    score = 0;
    theTimer(5, timeToPlay);
    setTimeout(() => pop(popMin, popMax), 6000);
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => gameOver(difficulty), popMax);
    }, (timeToPlay + 5) * 1000);
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

    ;countdown = setInterval(() => {
        if (timeLeft === -1) {
            clearInterval(countdown);
            return;
        }
        displayTimer(timeLeft, timeToPlay);
        timeLeft--
    }, 1000);
}

function displayTimer(seconds, timeToPlay) {
    if(seconds - 3 > timeToPlay) {
        timer.textContent = "Prepare to whack dem moles!!!";
    } else if (seconds > timeToPlay) {
        timer.textContent = seconds - timeToPlay
    } else if (seconds === timeToPlay) {
        timer.textContent = "GOGOGO!";
    } else if (seconds < timeToPlay) {
        timer.textContent = seconds;
    }
    else {
        return;
    }
}

function gameOver(difficulty) {
    score = scoreBoard.textContent;
    name = document.querySelector(".inputtext").value;
    clearInterval(countdown);
    timer.textContent = "Game is now over and you got a score of: " + score;
    dbuttons.forEach(button => button.removeAttribute("disabled"));
    updateLeaderboard(name, score, difficulty);
}

function updateLeaderboard(name, score, difficulty) {
    const easyList = JSON.parse(localStorage.getItem("easyList")) || [],
    normalList = JSON.parse(localStorage.getItem("normalList")) || [],
    hardList = JSON.parse(localStorage.getItem("hardList")) || [],
    insaneList = JSON.parse(localStorage.getItem("insaneList")) || [],
    godmodeList = JSON.parse(localStorage.getItem("godmodeList")) || [],
    currentList = eval(difficulty + "List"),
    currentHTML = eval(difficulty + "Leader");
    let i = 0;
    if (name !== "") {
        currentList.push([name, score]);
    }
    currentList.sort((a, b) => b[1] - a[1]);
    if (currentList.length > 10) {
        currentList.splice(10);
    }
    currentHTML.innerHTML = "";
    for (i; i < currentList.length; i++) {
        currentHTML.innerHTML += `<li>${currentList[i]}</li>`
    }
    updateStorage(difficulty, currentList);
}

function updateStorage(difficulty, currentList) {
    if (currentList === [["", ""]]) return;
    let asd = `${difficulty}List`;
    localStorage.setItem(asd, JSON.stringify(currentList));
}

function displayLeaderboard(e, difficulty) {
    updateLeaderboard("", "", difficulty);
    const clickedButtonValue = `${difficulty}Leaderboard`,
    leader = leaderboards;
    let i = 0;
    for (i = 0; i < leaderboards.length; i++) {
        if (leader[i].classList.contains(clickedButtonValue)) {
            leader[i].classList.add("active");
        } else {
            leader[i].classList.remove("active");
        }
    }
}

moles.forEach(mole => mole.addEventListener("click", hitMole));
lbuttons.forEach(button => button.addEventListener("click", displayLeaderboard.bind(null, event, button.value)));
displayLeaderboard("", "easy");