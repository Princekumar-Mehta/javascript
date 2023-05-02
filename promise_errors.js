new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

new Promise(function (resolve, reject) {
  throw new Error("Whoops!");
  setTimeout(() => {}, 1000);
}).catch(alert);
