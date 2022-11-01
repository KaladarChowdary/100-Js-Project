const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closedFace.addEventListener("click", () => {
  closedFace.classList.remove("active");
  openFace.classList.add("active");
});

openFace.addEventListener("click", () => {
  closedFace.classList.add("active");
  openFace.classList.remove("active");
});
