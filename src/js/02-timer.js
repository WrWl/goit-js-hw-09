import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const startBtn = document.querySelector('button[data-start]')
startBtn.disabled = true;

const daysCount = document.querySelector('[data-days]')
const hoursCount = document.querySelector('[data-hours]')
const minutesCount = document.querySelector('[data-minutes]')
const secondsCount = document.querySelector('[data-seconds]')
const date = new Date()
let timerId = null
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: date,
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        if (date.getTime() > selectedDates[0].getTime()) {
            startBtn.disabled = true;
            /*alert("Please choose a date in the future") */
            Notiflix.Report.failure('Uncorrect date', 'Please choose a date in the future', 'Ok');
        }
        else {
            startBtn.disabled = false;
        }
        
  },
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const fp = flatpickr("#datetime-picker", options);
/*const a = fp.latestSelectedDateObj.getTime() - date.getTime()
const counter = convertMs(a)

const startTimer = () => {
    timerId = setInterval(() => {
    daysCount.textContent = counter.days
    }, 1,); */
    /*daysCount.textContent = convertMs(fp.latestSelectedDateObj.getTime() - date.getTime()).days
    hoursCount.textContent = convertMs(fp.latestSelectedDateObj.getTime() - date.getTime()).hours
    minutesCount.textContent = convertMs(fp.latestSelectedDateObj.getTime() - date.getTime()).minutes
    secondsCount.textContent= convertMs(fp.latestSelectedDateObj.getTime() - date.getTime()).seconds }*/
    

/*startBtn.addEventListener("click", startTimer) */

