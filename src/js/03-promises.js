import { Notify } from 'notiflix/build/notiflix-notify-aio';
const inputDelay = document.querySelector(`input[name= "delay"]`)
const inputStep = document.querySelector(`input[name = "step"]`)
const inputAmount = document.querySelector(`input[name = "amount"]`)
const form = document.querySelector(".form")


function submForm(event) {
  event.preventDefault();
  
  for (let i = 0; i < inputAmount.valueAsNumber; i += 1){
    const shouldResolve = Math.random() > 0.3;
  const delay = inputDelay.valueAsNumber + (inputStep.valueAsNumber * i)
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldResolve) {
      resolve(Notify.success(`Fulfilled promise ${i+1} in ${delay}ms`));
    } else {
      reject(Notify.failure(`Rejected promise ${i+1} in ${delay}ms`));
    }
  }, delay);
  })
  promise.then(onResolve => {
    console.log(onResolve)
  }, onReject => {
    console.log(onReject)
  })
    
}
}
form.addEventListener("submit",submForm)
