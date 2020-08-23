const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
  const date = new Date();

  const second = date.getSeconds();
  const secondDegree = (second / 60)* 360+ 90;
  secondHand.style.transform =`rotate(${secondDegree}deg)`;

  const minute = date.getMinutes();
  const minuteDegree = (minute / 60)* 360+ 90;
  minuteHand.style.transform =`rotate(${minuteDegree}deg)`;

  const hour = date.getHours();
  const hourDegree = (hour / 60)* 360+ 90;
  hourHand.style.transform =`rotate(${hourDegree}deg)`;


}

setInterval(setDate, 1000);

setDate();