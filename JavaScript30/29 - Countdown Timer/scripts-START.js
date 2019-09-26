let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
    clearInterval(countdown);

    const timeNow = Date.now();
    const timeThen = timeNow + seconds * 1000;
    displayTime(seconds);
    displayEndTime(timeThen);

    countdown = setInterval(() => {
        const timeLeft = Math.round((timeThen - Date.now()) / 1000);
        if (timeLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTime(timeLeft);
    }, 1000);
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const minutes = end.getMinutes();
    const hour = end.getHours();
    endTimeDisplay.textContent = `Come back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});