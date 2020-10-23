//DOM
let divClock = document.getElementById("clock");
let h1 = document.getElementById("showClock");

let showTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hours = String(hours);
  min = String(min);
  sec = String(sec);
  let clock = `${hours.padStart(2, "0")}:${min.padStart(2, "0")}:${sec.padStart(
    2,
    "0"
  )}`;
  h1.textContent = clock;
  divClock.appendChild(h1);
};

setInterval(showTime, 1000);
