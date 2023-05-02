/*
let obj ={
    printName:()=>{
        document.write(this.name+"<br>");
    }
}

function User(userName){
    this.name=userName,
    this.giveName = function giveName(){
        document.write(this.name+"<br>");
    }
}


User.prototype = obj;
let user1 =  new User("Prince");
user1.giveName();
user1.printName();

// always use this keyword inside object and functions
*/

/*
function User(name,surname){
    this.name=name;
    this.surname=surname;
    this.prototype={
        constructor:User,
        isHuman:true,
    } // to add isHuman as extra properrty, because this.prototype = { constructor:User} is default
}

let user1 = new User("Prince","Mehta");

let user2 = new User("Raj","Parmar");

//let user3 = new User("Bhuvan","Rajput");
let user3 = new user1.constructor("Bhuvan","Rajput");

console.log(user3);

*/

// task 1
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

/*
let rabbit = new Rabbit();

Rabbit.prototype = {};


console.log( rabbit.eats );
// what happens ?

/*

Rabbit.prototype ----->  {eats: true};   <-------- rabbit.eat as inheitance.

Rabbit.prototype -----> {}
rabbit.eat --------->{eats: true};



*/
//*/

// let rabbit2 = new Rabbit();
// Rabbit.prototype.eats =false;
// console.log(rabbit2.eats);

// what happens ?

/*

Rabbit.prototype ----->  {eats: true};   <-------- rabbit.eat as inheritance.

Rabbit.prototype ----->  {eats: false};   <-------- rabbit.eat as inheitance.


*/

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats; // rabbit doesn't have eat property so no effect

console.log( rabbit.eats );

delete Rabbit.prototype.eats // this will delete eat from protoype itself.
console.log( rabbit.eats ); // as eat is deleted from prototype. rabbit won't be able to find it.