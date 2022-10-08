// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";




const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    dataDaysEl: document.querySelector('span[data-days]'),
    dataHoursEl: document.querySelector('span[data-hours]'),
    dataMinutesEl: document.querySelector('span[data-minutes]'),
    dataSecondsEl:document.querySelector('span[data-seconds]')
};
// console.log(refs.inputEl);

const timer = {
    start() {
        const startTime = Date.parse(refs.inputEl.value);
        // console.log(startTime);

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            setSpanTime(convertMs(deltaTime));
        }, 1000);
    },
};

refs.btnStart.disabled = true; //дефолтний стан кнопки

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < Date.now()) {
        //   window.alert("Please choose a date in the future")
          Notiflix.Notify.failure('Please choose a date in the future');
      } else {
          refs.btnStart.disabled = false;
      }
  },
};

flatpickr(refs.inputEl, options);

refs.btnStart.addEventListener('click', () => {
    timer.start();
});

function convertMs(deltaTime) {
    // console.log(deltaTime);
    if (deltaTime < 0) {
        clearInterval();
    return {
        'days': "00",
        'hours': "00",
        'minutes': "00",
        'seconds': "00",
    };
    } else {
        // refs.dataSecondsEl.textContent = ('0' + Math.floor( (deltaTime/1000) % 60 )).slice(-2);  
        // refs.dataMinutesEl.textContent = ('0' + Math.floor( (deltaTime/1000/60) % 60 )).slice(-2);
        // refs.dataHoursEl.textContent = ('0' + Math.floor( (deltaTime/(1000*60*60)) % 24 )).slice(-2);
        // refs.dataDaysEl.textContent = ('0' + Math.floor( deltaTime/(1000*60*60*24) )).slice(-2);
        const seconds = addLeadingZero(Math.floor((deltaTime / 1000) % 60));
        const minutes = addLeadingZero(Math.floor((deltaTime / 1000 / 60) % 60));
        const hours = addLeadingZero(Math.floor((deltaTime / (1000 * 60 * 60)) % 24));
        const days = addLeadingZero(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
    }
    // console.log(deltaTime);
}

function addLeadingZero(value) {
    if (value < 10) {
        return String(value).padStart(2, '0');
    }
    return String(value);
}

function setSpanTime(time) {
    refs.dataSecondsEl.textContent = time.seconds;
    refs.dataMinutesEl.textContent = time.minutes;
    refs.dataHoursEl.textContent = time.hours;
    refs.dataDaysEl.textContent = time.days;
    // console.log(time)
}

// Timer styles
styleField = document.createElement("style");
styleField.innerText = ".field{display:grid; margin-right: 20px;}";
document.body.appendChild(styleField);
  
styleTimer= document.createElement("style");
styleTimer.innerText = ".timer{display:flex;}";
document.body.appendChild(styleTimer);

styleValue = document.createElement("style");
styleValue.innerText = ".value{font-size: -webkit-xxx-large;}";
document.body.appendChild(styleValue);







