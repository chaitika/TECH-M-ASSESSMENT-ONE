let timer;
let totalTime = 0;
let isPaused = false;

function updateDisplay() {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  document.getElementById("timeDisplay").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (!isPaused) {
    const min = parseInt(document.getElementById("minutes").value) || 0;
    const sec = parseInt(document.getElementById("seconds").value) || 0;
    totalTime = min * 60 + sec;
  }
  if (totalTime <= 0) return;

  isPaused = false;
  clearInterval(timer);
  timer = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    } else {
      totalTime--;
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  isPaused = false;
  totalTime = 0;
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
  document.getElementById("timeDisplay").textContent = "00:00";
}
