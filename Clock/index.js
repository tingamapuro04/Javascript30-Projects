const secondHand = document.querySelector(".sec-hand")
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const Time = document.querySelector(".Time");
function setDate() {
  const now =  new Date();
  const secs = now.getSeconds();
  const secDegrees = Math.floor(((secs / 60) * 360));
  secondHand.style.transform = `rotate(${secDegrees + 90}deg)`;
  const min = now.getMinutes();
  const minDegrees = Math.floor((min/60)*360);
  minHand.style.transform = `rotate(${minDegrees + 90}deg)`;
  const hour = now.getHours();
  const hourDegree = Math.floor((hour/12) * 360);
  hourHand.style.transform = `rotate(${hourDegree + 90}deg)`;
  Time.textContent = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`
}

// set interval
setInterval(setDate, 1000)