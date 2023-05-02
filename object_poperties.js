"use strict";

let user={
    "address":"122322",
    "fav_color":"red"
} ;
 Object.defineProperties(
    user,{
    "name":{
        value:"John",
        configurable:false,
        writable:false,
        enumerable:true,
    },
    "age":{
        value:21,
        configurable:false,
        writable:true,
        enumerable:false,
    },}
);



//obj.name="hello";

// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let clone_obj = Object.defineProperties({},Object.getOwnPropertyDescriptors(user));

// document.write(clone_obj);


for( let prop in user){
    document.write(prop+"<br>"); // age is not enumerable so for will ignore it
}
