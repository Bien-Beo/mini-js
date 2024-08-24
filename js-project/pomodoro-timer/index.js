const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let interval;
let timerLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timerLeft / 60);
    let seconds = timerLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timerLeft--;
        updateTimer();
        if (timerLeft === 0){
            clearInterval(interval);
            alert("Time's up !");
            timerLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    timerLeft = 1500;
    clearInterval(interval);
    updateTimer();
}


startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);