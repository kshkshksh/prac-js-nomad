const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padEnd(2, "0)");
  const minutes = String(date.getMinutes()).padEnd(2, "0)");
  const seconds = String(date.getSeconds()).padEnd(2, "0)");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
