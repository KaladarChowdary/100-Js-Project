const promise1 = new Promise((resolve, reject) => {
  const msg = "Object1";
  resolve(msg);
});

const promise2 = new Promise((resolve, reject) => {
  const msg = "Object2";
  resolve(msg);
});

const promise3 = new Promise((resolve, reject) => {
  const msg = "Object3";
  resolve(msg);
});

// promise1 = Promise.resolve("obj1");
// promise2 = Promise.resolve("obj2");
// promise3 = Promise.resolve("obj3");

function success(msg) {
  console.log(msg);
}

Promise.all([promise1, promise2, promise3]).then(success);
