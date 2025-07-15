# stopwatch

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Секундомер</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 100px;
      background-color: #f4f4f4;
    }

    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }

    .buttons button {
      font-size: 18px;
      padding: 10px 20px;
      margin: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    #startBtn { background-color: #4CAF50; color: white; }
    #pauseBtn { background-color: #ff9800; color: white; }
    #resetBtn { background-color: #f44336; color: white; }
  </style>
</head>
<body>

  <h1 id="display">00:00:00</h1>

  <div class="buttons">
    <button id="startBtn">Старт</button>
    <button id="pauseBtn">Пауза</button>
    <button id="resetBtn">Сброс</button>
  </div>

  <script>
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;

    const display = document.getElementById('display');

    function updateDisplay() {
      const time = new Date(elapsedTime);
      const hours = String(time.getUTCHours()).padStart(2, '0');
      const minutes = String(time.getUTCMinutes()).padStart(2, '0');
      const seconds = String(time.getUTCSeconds()).padStart(2, '0');
      display.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 1000);
    }

    function pauseTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      updateDisplay();
    }

    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
    document.getElementById('resetBtn').addEventListener('click', resetTimer);
  </script>

</body>
</html>
