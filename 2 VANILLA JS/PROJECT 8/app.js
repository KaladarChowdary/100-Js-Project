const display = document.querySelector("#counter");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
let counter = 0;
updateColor();

prevBtn.addEventListener("click", function () {
  counter--;
  display.textContent = counter;
  updateColor();
});

nextBtn.addEventListener("click", function () {
  counter++;
  display.textContent = counter;
  updateColor();
});

function updateColor() {
  if (counter < 0) display.style.color = "red";
  if (counter > 0) display.style.color = "green";
}
