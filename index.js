const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBttn: document.querySelector('[data-action="start"]'),
  stopBttn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const startChanging = () => {
  if (!timerId) {
    timerId = setInterval(() => {
      refs.body.setAttribute(
        'style',
        `background-color: ${colors[randomIntegerFromInterval(0, 5)]}`,
      );
    }, 1000);
  }
};

const stopChanging = () => {
  clearInterval(timerId);
  timerId = null;
};

refs.startBttn.addEventListener('click', startChanging);
refs.stopBttn.addEventListener('click', stopChanging);
