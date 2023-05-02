let promise = new Promise(function (resolve, result) {
  alert("hello");
  resolve(75);
});

console.log(promise);

promise = new Promise(function (resolve, result) {
  alert("hello");
  result(new Error("didn't work"));
});

console.log(promise);
