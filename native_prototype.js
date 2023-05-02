/*
let obj = {};

// here even though obj is empty, it will inherit methods as from Object.prototype

function func(){

}
console.log(func.toString());

// Array, Function, etc has prototype. and their parent is Object.prototype
*/
//task 1
/*
Function.prototype.defer=(ms)=>{
  setTimeout(this,ms)
};
// above syntax won't work because arrow function can't retain context. so here in browswer it will take window as this so an error ultimetly
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
function f() {
    alert("Hello!");
  }

  f.defer(1000);
*/
  //task 2
Function.prototype.defer=function(ms){
     let f=this;
    return function wapper(...args){
       setTimeout(()=>{ return f.call(this,...args)},ms);
    }
  };
//   Function.prototype.defer = function(ms) {
    // let f = this;
    // return function(...args) {
    //   setTimeout(() => f.apply(this, args), ms);
    // }
//   };
  function f(x,y) {
      alert(x+y);
    }

    f.defer(1000)(1,2);

