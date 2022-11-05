const display = document.getElementById("display");

const buttons = Array.from(document.getElementsByClassName("button"));

console.log(display);
console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "C":
        display.innerText = "";
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
