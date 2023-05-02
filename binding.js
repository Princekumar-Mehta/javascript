/*
function printName(){
    document.write("hello "+this.name);
}

let user = {
    name:"Prince"
}

let func = printName.bind(user);

// user.name="Raj";
// user = {
//     isAnimal:false,
// }
printName();
*/

// partial
/*
function multiply(x,y){
    return x*y;
}

let func = multiply.bind(null,4);

document.write(func(5));
*/

// partial without binding context
/*
function partial(func,...argBound){
    return function(...args){
        return func.call(this,...argBound,...args);
    }
}

let user = {
    firstName:"Prince",
    greetings(time,phrase){
        console.log(time+" "+this.firstName+" "+phrase);
    }
}
request
user.greetings = partial(user.greetings,new Date());
user.greetings("hello");
setTimeout(()=>user.greetings("hi"),5000);
*/

// task 3
/*
function sayHi(){
    docuemnt.write("hello");
}

sayHi.test=5;

document.write(sayHi.test+"<br>");

sayHi = sayHi.bind({name:"Prince"}); // hee bind returns a new object

document.write(sayHi.test);
*/
// task 4
/*
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }

  let user = {
    name: 'John',

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },

  };

  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  */

// task 5

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
