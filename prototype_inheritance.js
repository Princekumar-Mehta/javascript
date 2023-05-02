


let animal = {
    leg:4,
    color:"white",
    printMe(){
     document.write(JSON.stringify(this)+"<br>"); // this will be the object by which is called
    }
 }

 let human = {
     name:"Raj",
     __proto__:animal,
 }

 animal.leg=4;

 human.leg=2; // this will make leg as own poperty because protyotype can't be used for writing
 human.surname="Mehta";

 document.write(human.leg+"  "+human.color+"<br>");
 document.write(animal.leg+"  "+animal.color+"<br>");
 (human.printMe());
 (animal.printMe());

 for(let prop in human){
     if(human.hasOwnProperty(prop)){
         document.write(prop+" is own property<br>");
     }else{
         document.write(prop+" is inherited property<br>")
     }
 }

 // object.keys ignores inherited properties
 // for...in doesn't ignore properies
 // fo...in loop only these poperties which are enumerable

// task 1
let head = {
    glasses: 1
  };

  let table = {
    pen: 3,
    __prop__:head,
  };

  let bed = {
    sheet: 1,
    pillow: 2,
    __prop__:table,
  };

  let pockets = {
    money: 2000,
    __prop__:bed,
  };