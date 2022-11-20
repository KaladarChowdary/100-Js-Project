const redBox = document.querySelector(".red-box");
console.log(redBox);

function getMousePos(e) {
  return { x: e.clientX, y: e.clientY };
}

document.onmousemove = function (e) {
  var mousecoords = getMousePos(e);
  console.log(`Mouse is at ${e.x},${e.y}`);
  redBox.style.top = e.y + "px";
  redBox.style.left = e.x + "px";
};
