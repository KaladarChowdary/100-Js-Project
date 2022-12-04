// EXAMPLE PROJECT ON CALLBACKS

let sucess = prompt("Enter 1 for success");

function takeCallbacks(successCallback, failureCallback) {
  if (sucess === "1") {
    console.log("Running sucessCallback with no arguments");
    successCallback();
  } else {
    console.log("Running failureCallback with no arguments");
    failureCallback();
  }
}

takeCallbacks(
  () => {
    console.log("\tHello, This is sucessCallback");
    console.log("\tCurrently I'm running without arguments");
  },
  () => {
    console.log("\tHello, This is failureCallback");
    console.log("\tI'm running withou arguments too");
  }
);
