const redBox = document.querySelector(".red-box");
console.log(redBox);

function getMousePos(e) {
  return { x: e.clientX, y: e.clientY };
}

redBox.onmouseenter = function (e) {
  var mousecoords = getMousePos(e);
  redBox.style.left = e.clientX + 100 + "px";
};
