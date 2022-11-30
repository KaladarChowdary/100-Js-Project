const promise1 = new Promise((resolve, reject) => {
  const msg = "SuccessObject1";
  resolve(msg);
});

const promise2 = new Promise((resolve, reject) => {
  const msg = "SuccessObject2";
  resolve(msg);
});

const promise3 = new Promise((resolve, reject) => {
  const msg = "SuccessObject3";
  resolve(msg);
});

function success(msg) {
  console.log(msg);
}

// Promise.all([promise1, promise2, promise3]).then(success);

async function asyncCode() {
  const resovleParameter = await Promise.all([promise1, promise2, promise3]);

  success(resovleParameter);
}

asyncCode();
