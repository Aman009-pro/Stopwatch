let timer; // Timer object
let timeElapsed = 0; // Time elapsed in milliseconds
let isRunning = false; // Flag to track if the stopwatch is running

function startStop() {
  if (isRunning) {
    // Stop the stopwatch
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    // Start the stopwatch
    timer = setInterval(updateTime, 1000); // Update time every second (1000 ms)
    isRunning = true;
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
}

function reset() {
  // Stop the stopwatch (if running)
  clearInterval(timer);
  isRunning = false;
  document.getElementById('startStopBtn').textContent = 'Start';

  // Reset time elapsed
  timeElapsed = 0;
  updateTime();
}

function updateTime() {
  timeElapsed += 1000; // Increment time by 1 second (1000 ms)
  
  // Calculate hours, minutes, and seconds
  let hours = Math.floor(timeElapsed / (1000 * 60 * 60));
  let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  // Format time as HH:MM:SS
  let displayTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  // Update the display
  document.getElementById('display').textContent = displayTime;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time; // Add leading zero if time is less than 10
}
