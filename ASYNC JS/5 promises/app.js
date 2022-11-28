const recordVideo1 = new Promise((resolve, reject) => {
  resolve("video 1 recorded");
});

const recordVideo2 = new Promise((resolve, reject) => {
  resolve("video 2 recorded");
});

const recordVideo3 = new Promise((resolve, reject) => {
  resolve("video 3 recorded");
});

// Promise.all([recordVideo1, recordVideo2, recordVideo3]).then((message) => {
//   for (let i of message) console.log(i);
// });

Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((message) => {
  console.log(message);
});
