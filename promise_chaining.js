/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

p1.then((value) => {
  console.log(`p1 resolved with ${new Date().getSeconds()}\n`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
})
  .then((value) => {
    console.log(`p2 resolved with ${new Date().getSeconds()}\n`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    });
  })
  .then((value) => {
    console.log(`p3 resolved with ${new Date().getSeconds()}\n`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    });
  });
*/
/*
function loadScript(src) {
  return new Promise((resolve, result) => {
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
    script.onload = () => {
      return resolve(5);
    };
    script.onerror = () => {
      return reject(5);
    };
  });
}
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
).then(() => {
  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
  ).then(() => {
    console.log("both loaded");
  });
});
*/

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(func) {
    setTimeout(() => {
      func.call(this, this.num); // func(this.num)
    }, 2000);
  }
}

new Promise((resolve, reject) => resolve(2))
  .then((value) => {
    return new Thenable(value);
  })
  .then(alert);
