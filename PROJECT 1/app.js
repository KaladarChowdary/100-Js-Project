const emoji = document.querySelectorAll(".emoji");
console.log(emoji);

function reverseClass() {
  emoji.forEach((node) => {
    if (node.classList.contains("active")) node.classList.remove("active");
    else node.classList.add("active");
  });
}

emoji.forEach((node) => {
  node.onclick = reverseClass;
});
