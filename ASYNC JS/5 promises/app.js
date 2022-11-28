const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({ name: "userleft", message: ":(" });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "webDevSimplified < Cat",
//     });
//   } else {
//     callback("ThumbsUP and subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log(`Success : ${message}`);
//   },
//   (error) => {
//     console.log(`${error.name} : ${error.message}`);
//   }
// );

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({ name: "userleft", message: ":(" });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "webDevSimplified < Cat",
      });
    } else {
      resolve("ThumbsUP and subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(`Success - ${message}`);
  })
  .catch((error) => {
    console.log(`${error.name} - ${error.message}`);
  });
