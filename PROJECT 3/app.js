const circle = document.querySelector("#circle");

circle.addEventListener("mouseenter", function () {
  circle.classList.add("hover");
});

circle.addEventListener("mouseleave", function () {
  circle.classList.remove("hover");
});
