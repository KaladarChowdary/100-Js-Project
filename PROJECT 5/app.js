const display = document.getElementById("display");

const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText.toString());
        } catch {
          display.innerText = "Enter correct expression";
        }

        break;

      case "C":
        display.innerText = "";
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
