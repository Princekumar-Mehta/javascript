//promises provide parallel execution
// this is used in network calls while fetching data
/*
let p1 = new Promise((resolve, reject) => {
  console.log("promise 1 is pending");
  setTimeout(() => {
    console.log("This is a promise and it is fulfilled");
    reject(new Error("error fom p1"));
  }, 5000);
});

p1.then((value) => {
  console.log("promise 1 fulfilled");
}).catch((error) => {
  console.log(error);
});

// p1.finally(() => {
//   console.log("Promise 1 over so stop loading indicator");
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("promis 2 is pending");
//   setTimeout(() => {
//     console.log("This is a promise and it is rejected");
//     reject(new Error("error fom p2"));
//   }, 5000);
// });

// p2.finally(() => {
//   console.log("Promise 2 over so stop loading indicator");
// });
// p2.then(
//   (value) => {
//     console.log("promise 1 fulfilled");
//   },
//   (error) => {
//     console.log(error);
//   }
// );
*/

// callback based version
/*
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }
  */
// promise based

// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   return new Promise((resolve, reject) => {
//     script.onload = () => {
//       document.head.append(script);
//       resolve();
//     };
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));
//   });
// }

// let p = loadScript("script.js");

/*
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    document.head.append(script);

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
  });
}

let promise = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
);

promise.then(
  (script) => alert(`${script.src} is loaded!`),
  (error) => alert(`Error: ${error.message}`)
);

promise.then((script) => alert("Another handler..."));
*/

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(3000).then(() => alert("runs after 3 seconds"));
