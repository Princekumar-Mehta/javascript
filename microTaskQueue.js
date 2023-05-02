new Promise((resolve, reject) => {
  resolve(5);
}).then((value) => {
  console.log(value);
});

console.log("hello");

// if we want to set some order we can put them in .then

new Promise((resolve, reject) => {
  resolve(5);
})
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log("hello");
  });
