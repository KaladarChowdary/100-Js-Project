const display = document.getElementById("display");

const buttons = Array.from(document.getElementsByClassName("button"));
let clear = false;

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "←":
        if (clear) {
          display.innerText = "";
        }

        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText.toString());
        } catch {
          display.innerText = "Enter correct expression";
          clear = true;
          console.log(`making clear true: ${clear}`);
        }

        break;

      case "C":
        display.innerText = "";
        break;
      default:
        console.log(clear);
        if (clear) {
          display.innerText = "";
        }
        clear = false;
        display.innerText += e.target.innerText;
    }
  });
});
