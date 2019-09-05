const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector(".fullscreen");

function playButton() {
    const playing = video.paused ? "play" : "pause";
    video[playing]();
}

function update() {
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value;
}

function progressUpdate() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function kelaus(e) {
    const kelausTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = kelausTime;
}

function fullScreen() {
        video.requestFullscreen();
}

video.addEventListener("click", playButton);
video.addEventListener("play", update);
video.addEventListener("pause", update);
video.addEventListener("timeupdate", progressUpdate);
toggle.addEventListener("click", playButton);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", rangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", rangeUpdate));
let mousedown = false;
progress.addEventListener("click", kelaus);
progress.addEventListener("mousemove", (e) => mousedown && kelaus(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
fullscreen.addEventListener("click", fullScreen);


