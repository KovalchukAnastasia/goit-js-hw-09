function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let intervalId = null;

// console.log(btnStart);
// console.log(btnStop);
btnStop.disabled = true;

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;

};

btnStop.addEventListener('click', onBtnStopClick);

function onBtnStopClick() {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;

};
