const promise1 = new Promise((resolve, reject) => {
  a = 1 + 1;

  a = 3;

  if (a === 2) {
    resolve("SuccessPromise1");
  } else {
    reject("FailurePromise1");
  }
});

const promise2 = new Promise((resolve, reject) => {
  a = 1 + 1;

  //   a = 3;

  if (a === 2) {
    resolve("SuccessPromise2");
  } else {
    reject("FailurePromise2");
  }
});

// promise1
//   .then(
//     (msg) => {
//       console.log(`Promise 1 : ${msg}`);
//       return promise2;
//     },
//     (msg) => {
//       console.log(`Promise 1 : ${msg}`);
//       return promise2;
//     }
//   )
//   .then(
//     (msg) => {
//       console.log(`Promise 2 : ${msg}`);
//     },
//     (msg) => {
//       console.log(`Promise 2 : ${msg}`);
//     }
//   );

function pr1(msg) {
  console.log(`Promise 1 : ${msg}`);
  return promise2;
}

function pr2(msg) {
  console.log(`Promise 2 : ${msg}`);
}

function pr(msg) {
  console.log(`Promise Failed : ${msg}`);
}

// promise1.then(pr1).then(pr2).catch(pr);

async function asyncCode() {
  try {
    const resParameter = await promise1;
    pr1(resParameter);
    const resParameter2 = await promise2;
    pr2(resParameter2);
  } catch (err) {
    pr(err);
  }
}

asyncCode();
