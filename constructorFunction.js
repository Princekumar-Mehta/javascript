// we put first letter of constructor function to make it look a like a class

function MakeCounter() {
  let count = 0;
  (this.inc = function () {
    this.count++;
  }),
    (this.dec = function () {
      this.count--;
    });
}
let counter = new makeCounter();

counter.inc();

// to make any function as constructor functon use new keyword.
