/*
class Car {
  constructor(carName) {
    this.carName = carName;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    document.write(`${this.carName} is running at ${this.speed} <br>`);
  }
  //stop = function () { // this won't wokr because class poperties must be method
  stop() {
    this.speed = 0;
    document.write(`${this.carName}  stopped <br>`);
  }
}

let car1 = new Car("Car 1");
car1.run(70);
car1.stop();

class Car2Bike extends Car {
  constructor(carName, bikeName) {
    super(carName); //  this call to super is necessary
    this.bikeName = bikeName;
    this.mode = "Car";
  }
  convert() {
    this.mode = "Bike";
    document.write(`${this.carName} converted to ${this.bikeName}`);
  }
  stop() {
    // 3 sec precision in stopping
    setTimeout(() => super.stop(), 3000); // arrow functon don't have supe or this. so it will take from outer environment
    // super.stop();
    //this.convert();
  }
}

let car2Bike1 = new Car2Bike("Car 1", "Bike 1");
car2Bike1.run(40);
car2Bike1.stop();
*/
/*
// time out will overwrite whatever we have on screen
function writeMe() {
  document.write("hello<br>");
  document.write("vdg<br>");
  setTimeout(() => document.write("hi"), 2000);
}
writeMe();
*/

// if we call a method of parent which uses a method or class field which is overridden by child class then
// that method will use child class' method or class fields.
// because here this is obj of child class and method1 of child class is more near
/*
class Class1 {
  method1() {
    document.write("hello from parent");
  }
  method2() {
    document.write("method 2 from parent<br>");
    this.method1();
  }
}

class Class2 extends Class1 {
  method1() {
    document.write("method 1 from child");
  }
}

let obj = new Class2();
obj.method2();
*/

// task 1
/*
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.created = Date.now();
  }
}preci

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);

*/

// task 2
/*
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
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
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template });
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({ template: "h:m:s", precision: 2000 });
clock.start();
*/
