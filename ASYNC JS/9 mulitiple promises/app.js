const promise1 = new Promise((resolve, reject) => {
  a = 1 + 1;

  //   a = 3;

  if (a === 2) {
    resolve("SuccessObject");
  } else {
    reject("FailureObject");
  }
});

const promise2 = new Promise((resolve, reject) => {
  a = 1 + 1;

  //   a = 3;

  if (a === 2) {
    resolve("SuccessObject");
  } else {
    reject("FailureObject");
  }
});

promise1
  .then(
    (msg) => {
      console.log(`Promise 1 : ${msg}`);
      return promise2;
    },
    (msg) => {
      console.log(`Promise 1 : ${msg}`);
      return promise2;
    }
  )
  .then(
    (msg) => {
      console.log(`Promise 2 : ${msg}`);
    },
    (msg) => {
      console.log(`Promise 2 : ${msg}`);
    }
  );
