import Notiflix from 'notiflix';

const refs = {
  submitBtn: document.querySelector('button'),
  delayField: document.querySelector('input[name="delay"]'),
  stepField: document.querySelector('input[name="step"]'),
  amountField: document.querySelector('input[name="amount"]')
};

// console.log(refs.amountField);

refs.submitBtn.addEventListener('click', onPressBtn);

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {

      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject
      }     
    }, delay);
  });
}

function onPressBtn(e) {
  e.preventDefault();
  const delay = Number(refs.delayField.value);
  const step = Number(refs.stepField.value);
  const amount = Number(refs.amountField.value);
  let delayCum = 0;

  for (let i = 0; i < amount; i += 1) {
    delayCum += i === 0 ? delay : step;
    createPromise(i + 1, delayCum)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    // console.log(delayCum);
  }
    
}

