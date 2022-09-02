import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Block } from 'notiflix';
const startBtn = document.querySelector('button[data-start]')
startBtn.disabled = true;
const DELAY = 1000;
const daysCount = document.querySelector('[data-days]')
const hoursCount = document.querySelector('[data-hours]')
const minutesCount = document.querySelector('[data-minutes]')
const secondsCount = document.querySelector('[data-seconds]')
const date = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        if (selectedDates[0] < date) {
            startBtn.disabled = true;
            /*alert("Please choose a date in the future") */
            Notiflix.Report.failure('Uncorrect date', 'Please choose a date in the future', 'Ok');
        }
        else {
            
            startBtn.disabled = false;
            const choosenDate = selectedDates[0];
      startBtn.addEventListener('click', () => {
        if (this.isActive) {
          return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = choosenDate - currentTime;
          const time = convertMs(deltaTime);
          if (deltaTime <= 0) {
            clearInterval(this.intervalId);
              this.isActive = false;
              
              return Notiflix.Report.success('Timer is over', 'congratulations!', 'Ok');
              
            }
          
          console.log(time);
          updateTimerOnScreen(time);
        }, DELAY);
      });
    
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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const updateTimerOnScreen = ({ days, hours, minutes, seconds }) => {
    
    
        daysCount.textContent = `${days}`.padStart(3, "0")
        hoursCount.textContent = addLeadingZero(`${hours}`)
        minutesCount.textContent = addLeadingZero(`${minutes}`)
        secondsCount.textContent = addLeadingZero(`${seconds}`)
        
    
   
    
    }
    
