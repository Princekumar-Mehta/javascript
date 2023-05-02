// let sayHi1 = function() {
//     alert("Hi");
//   };

  /*let sayHi2 = function hello() {
    alert("Hi");
  };

 // alert(sayHi1.name);
  alert(sayHi2.name);

function f(sayHi = function() {}) {
    alert(sayHi.name); // sayHi (works!)
  }

  f(function myname(){});*/

/*
We can use .name to find the name of the function,
and .length to find number of arguments that function takes.
*/

// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }

//   }

//   // for positive answer, both handlers are called
//   // for negative answer, only the second one
//   ask("Question?", () => alert('You said yes'), result => alert(result));

// function makeCounter() {
//     // instead of:
//     // let count = 0

//     function counter() {
//       return counter.count++;
//     };

//    counter.count = 0;

//     return counter;
//   }

//   let counter = makeCounter();
//   alert( counter() ); // 0
//   alert( counter() );
/*
let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself
    }
  };

  sayHi(); // Hello, Guest

  // But this won't work:
  func();*/


 /* function makeCounter(){
    this.counter=()=>{
       this.count++;
       return this.count;
    },
    this.decrease=()=>{
        this.count--;
        return this.count;
    },
    this.set=(count)=>this.count=count,
    this.count=0;
  }

  let myCounter =  new makeCounter();

  console.log(myCounter.counter());
  console.log(myCounter.decrease());
  console.log(myCounter.set(5));
  console.log(myCounter.decrease());
  */

  function sum(num1){
     let currentSum=num1;

     function add(num2){
       currentSum+=num2;
       return add;
     }
     add.toString = ()=>{ return currentSum};

  }

  alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) );

function sum(a) {

    let currentSum = a;

    function f(b) {
      currentSum += b;
      return f;
    }

    f.toString = function() {
      return currentSum;
    };

    return f;
  }

  alert( sum(1)(2) ); // 3
  alert( sum(5)(-1)(2) ); // 6
  alert( sum(6)(-1)(-2)(-3) ); // 0
  alert( sum(0)(1)(2)(3)(4)(5) ); // 15