let p = new Promise((resolve, reject) => {
  let a = 1 + 1;

  a = 34;

  if (a === 2) {
    resolve("Answer is 2");
  } else {
    reject(`Answer should be 2 but we got ${a}`);
  }
});

function successFunction(msg) {
  console.log(`Success: ${msg}`);
}

function failureFunction(msg) {
  console.log(`Failure: ${msg}`);
}

p.then(successFunction, failureFunction);
