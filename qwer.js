/*const input1 = document.querySelector(`input.sum1`);
const input2 = document.querySelector(`input.sum2`);
const button = document.querySelector(`button`);
button.addEventListener(`click`, function () {
  let resul = +input1.value + +input2.value;
  const span = document.querySelector("span");
  span.textContent = resul;
});*/
/*const li1 = document.querySelector(`li.li1`);
const li2 = document.querySelector(`li.li2`);
const li3 = document.querySelector(`li.li3`);
li1.addEventListener(`click`, function () {
  li1.classList.add(`color-red`);
});
li2.addEventListener(`click`, function () {
  li2.classList.add(`color-red`);
});
li3.addEventListener(`click`, function () {
  li3.classList.add(`color-red`);
});*/

const li = document.querySelectorAll(`li`);
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener(`click`, function (event) {
    event.target.classList.toggle(`color-red`);
  });
}