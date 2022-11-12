let counter = 1;

function nextCounter() {
  counter = (counter % 8) + 1;
}

function prevCounter() {
  counter = counter === 0 ? 8 : counter - 1;
}
