let timer;
let totalSeconds = 0;

function updateTimer() {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  document.getElementById("timer").textContent = `${hrs
    .toString()
    .padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

document.getElementById("countdown").addEventListener("click", () => {
  const hrs = parseInt(document.getElementById("hours").value) || 0;
  const mins = parseInt(document.getElementById("minutes").value) || 0;
  const secs = parseInt(document.getElementById("seconds").value) || 0;
  totalSeconds = hrs * 3600 + mins * 60 + secs;

  if (!timer) {
    timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimer();
      } else {
        clearInterval(timer);
        timer = null;
        alert("Time's up!");
      }
    }, 1000);
  }
});

document.getElementById("countup").addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      totalSeconds++;
      updateTimer();
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  totalSeconds = 0;
  updateTimer();
});

updateTimer();
