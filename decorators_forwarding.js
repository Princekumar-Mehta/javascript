
/*
// providing this by func.call
let obj = {
    someNumber(){
        return 5;
    },

    my_function(x){
       return x+this.someNumber();
    }
}


function decorator(func){
    let cache = new Map();

    return function(x){
        console.log(cache);
         if(cache.has(x)){
            return cache.get(x);
         }else{
            // cache.set(x, func(x));
            cache.set(x, func.call(this,x)); // to povide context
            cache.set(x, func.call(this,x));
            return cache.get(x);
         }
    }
}
document.write(obj.my_function(6));
obj.my_function = decorator(obj.my_function);
document.write(obj.my_function(6));

*/

// function add(a,b){
//     console.log(arguments);
// }
// add(1,2);


/*
//multiple args

function my_power(x,y){
    showArgs=()=>{
        console.log(`my_power called for ${x + " " + y}`)
    };
    this.showArgs(x,y);
    return x**y;
}


function decorator(func){
    let cache = new Map();

    return function(){
        console.log(cache);
        let key = hash(arguments);
         if(cache.has(key)){;
            return cache.get(key);
         }else{
            cache.set(key, func.call(this,...arguments)); // using call
            cache.set(key, func.apply(this,arguments)); // using apply
            return cache.get(key);
         }
    }
}

my_power = decorator(my_power);

function hash() {
    console.log( [].join.call(arguments,"...") ); // borrowed fucntion join fom blank array
  }
console.log("two "+my_power(5,6));
console.log("three "+my_power(5,6));

// when we pass context and all arguments as it is then it is called forwarding


*/


// wrapper function will not have the properties of function

//task 1
/*
function work(a, b) {
  //  alert( a + b ); // work is an arbitrary function or method
  }

  function spy(func){
    function wrapper(){
        wrapper.calls.push(Array.from(arguments));
        return func(...arguments);
    }
    wrapper.calls=[];
    return wrapper;
  }
  work = spy(work);

  work(1, 2); // 3
  work(4, 5); // 9
console.log(work);
  for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }
*/

  // task 2
  function f(x) {
    alert(x);
  }
  function delay(func,ms){
    return function (){
        setTimeout(()=>func.call(this,...arguments),ms); //hee we povide refernce to functionand don't call it yet
    }

  }
  // create wrappers
  let f1000 = delay(f, 5000);
  let f1500 = delay(f, 1500);


  f1000("test"); // shows "test" after 1000ms
  f1500("test");