/*class Student{
    constructor(name,std){
        this.name = name;
        this.std=std;
    }
    printMe(){
        document.write(`${this.name} ${this.std}`);
    }

}

let std1 =  new Student("Prince",5);

std1.printMe();
*/
// class is just a function

// let myClass = class Student{
//     constructor(name,std){
//         this.name = name;
//         this.std=std;
//     }
//     printMe(){
//         document.write(`${this.name} ${this.std}`);
//     }

// };

// let obj_std = new myClass("raj",8);

// obj_std.printMe();
/*
function giveMeClass(city,phrase){
     return class{
        sayHello(){
            alert(`${phrase} I am form ${city}`);
        }
     }
}

let Employer = giveMeClass("Rajkot","Hi");

let obj = new Employer();
obj.sayHello();
*/
/*
class Animal{
  constructor(name,speed){
   this.name=name;
   this.speed = speed;
  }
  run(){
    document.write(`${this.name} run with a speed of ${this.speed}`);
  }
}

class Rabbit extends Animal{
    jumps=true
}

let rabbit1 =  new Rabbit("Rabbit",70);

rabbit1.run();
*/
/*
class Student {
  schoolName = "xyz school"; // class fields
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {
    return this.name + " " + this.surname;
  }
  set fullName(fullName) {
    [this.name, this.surname] = fullName.split(" ");
  }
}

let student1 = new Student("Prince", "Mehta");
document.write(student1.fullName + "<br>");
student1.fullName = "Maurya Patel";
document.write(student1.fullName + "<br>");
*/
/*
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  } // this method will lose the context this

  click = () => {
    alert(this.value);
  }; // this will bind the method, as this will create seperate function for each object creation
}

let button = new Button("hello");

setTimeout(button.click.bind(button), 1000); // if function is bind in class itself then this line will also work
setTimeout(button.click.bind(button), 1000); // if function is not bind in class itself then use this
*/
/*
function Clock({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}
*/

class Clock {
  constructor({ template }) {
    // {template} used for named paramter
    this.template = template;
  }
  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };
  stop = () => {
    clearInterval(this.timer);
  };
  start = () => {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
