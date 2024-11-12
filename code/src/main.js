import {  getSecondsLeftOfYear, getTimeString } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const minutesLeft = document.getElementById("minutes-left"); // New element

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  minutesLeft.innerText = getMinutesLeftOfYear(now); // Set minutes left
  timeContainer.innerText = getTimeString(now);
}

render();
setInterval(render, 1000);
