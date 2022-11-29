function promise1() {
  return new Promise((resolve, reject) => {
    const msg = "Promise1 Object";
    resolve(msg);
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    const msg = "Promise2 Object";
    resolve(msg);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    const msg = "Object3";
    resolve(msg);
  });
}

Promise.all([promise1, promise2, promise3]).then((msg) => {
  console.log(msg);
});
