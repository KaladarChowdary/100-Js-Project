let counter = 1;
const imgContainer = document.querySelector(".img-container");
const buttons = document.querySelectorAll(".btn");

function nextCounter() {
  counter = (counter % 8) + 1;
}

function prevCounter() {
  counter = counter === 0 ? 8 : counter - 1;
}

function setImageAccordingToCounter() {
  imgContainer.style.background = `url('img/${counter}.jpg') center/contain fixed no-repeat`;
}

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (btn.classList.contains("btn-left")) prevCounter();
    if (btn.classList.contains("btn-right")) nextCounter();

    setImageAccordingToCounter();
  });
});
