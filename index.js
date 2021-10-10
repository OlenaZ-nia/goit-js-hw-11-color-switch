const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

// генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function switchColor() {
  const index = randomIntegerFromInterval(0, colors.length - 1);
  const randomColor = colors[index];
  refs.body.style.backgroundColor = randomColor;
};
let timerId = null;

refs.btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    switchColor();
    refs.btnStop.removeAttribute('disabled');
    refs.btnStart.setAttribute('disabled', true);
  }, 1000);
});

//Напиши скрипт, который после нажатия кнопки Start, 
//раз в секунду меняет цвет фона body на случайное значение из массива 
//используя инлайн - стиль.
//При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

refs.btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
});
