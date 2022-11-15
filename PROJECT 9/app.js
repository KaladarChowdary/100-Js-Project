const form = document.querySelector("#message-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const textBox = document.querySelector("#message");
  const fdback = document.querySelector(".feedback");
  const displayLabel = document.querySelector(".message-content");

  const message = textBox.value;

  if (message === "") {
    fdback.classList.remove("feedback");

    setTimeout(() => {
      fdback.classList.add("feedback");
    }, 3000);
  } else {
    displayLabel.textContent = message;
  }
});
