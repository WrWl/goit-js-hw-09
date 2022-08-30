const startBtn = document.querySelector(`button[data-start]`)
const stopBtn = document.querySelector(`button[data-stop]`)
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener("click", () => {
    startBtn.disabled = true
    if (timerId >= null) {
     timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
  }, 1000);
    }
     
});
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null
    startBtn.disabled = false
})