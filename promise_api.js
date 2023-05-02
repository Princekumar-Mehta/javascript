// here all promise resolve
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

let promise_all = Promise.all([p1, p2, p3]);

promise_all.then((value) => {
  console.log(value);
});
*/

// here p1 rejects and we use promise.all
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Error in p1"));
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

let promise_all = Promise.all([p1, p2, p3]);

promise_all.then((value) => {
  console.log(value);
});
*/

// here p1 rejects and we use promise.allsettled
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Error in p1"));
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

let promise_allSettled = Promise.allSettled([p1, p2, p3]);

promise_allSettled.then((value) => {
  console.log(value);
});
*/

// here p1 rejects and we use promise.allsettled
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

let promise_race = Promise.race([p1, p2, p3]);

promise_race.then((value) => {
  console.log(value);
});
// but if error comes then it won't return anything and show error
*/
/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error in p1"));
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});

let promise_any = Promise.any([p1, p2, p3]);

promise_any.then((value) => {
  console.log(value);
});
*/

Promise.resolve("value 1").then((value) => {
  console.log(value);
});
