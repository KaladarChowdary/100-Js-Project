const promise1 = new Promise((resolve, reject) => {
  let a = 1 + 1;
  //   a = 23;
  if (a === 2) {
    resolve("SuccessdataObject");
  } else {
    reject("errorObject");
  }
});

function success(obj) {
  console.log(`Success: ${obj}`);
}

function failure(obj) {
  console.log(`Failure: ${obj}`);
}

// promise1.then(success, failure);

async function asynchrounousCode() {
  const obj = await promise1;
  success(obj);
}

asynchrounousCode();
