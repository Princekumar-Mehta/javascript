// // vaiable declaed with _ a internal so we do not access it fom outside
// let obj ={
//     name:"Prince",
//     surname:"Mehta",
//     get fullName(){
//         return this.name+" "+this.surname;
//     },
//     set fullName(value){
//         [this.name,this.surname]=value.split(" ");
//     }
// }


// document.write(obj.fullName+"<br>");
// (obj.fullName=("Raj Shekhar"));
// document.write(obj.fullName+"<br>");


// let obj2 = {
//     _name:"",
//     get name(){
//         return this._name;
//     },
//     set name(value){
//         this._name = value;
//     }
// }
// // here _name is the actual property but we not accessing it directly.
// // instead we use wrapper name


// let user = {
//     name:"Prince",
//     birthdate:new Date("11-02-2001"), // earlier this was age
//     get age(){
//         let today=new Date();
//        return today.getFullYear()-this.birthdate.getFullYear(); // earlier this was return age;
//     },
//     set age(value){
//        this.age=value;
//     }
// }

// document.write(user.name + " age is "+user.age);

/*
"use strict";

let user = {
    name: "John",
    surname: "Smith",

    get extra(){
        return "hello";
    },


    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  let admin = {
    __proto__: user,
    isAdmin: true
  };


  admin.fullName = "Alice Cooper"; // this give error because prototype has getter only but not the setter method

  admin.extra="";
document.write(Object.keys(admin));
*/

