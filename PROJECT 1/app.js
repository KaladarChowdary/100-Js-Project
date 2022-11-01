const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

function makeActive(element) {
  element.classList.add("active");
}

function removeActive(element) {
  element.classList.remove("active");
}

function isActive(element) {
  return element.classList.contains("active");
}

makeActive(closedFace);

closedFace.addEventListener("click", () => {
  removeActive(closedFace);
  makeActive(openFace);
});

openFace.addEventListener("click", () => {
  removeActive(openFace);
  makeActive(closedFace);
});
