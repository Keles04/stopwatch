let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateDisplay(time) {
  const hours = String(Math.floor(time / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay(elapsedTime);
    }, 1000);
  }
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay(elapsedTime);
}