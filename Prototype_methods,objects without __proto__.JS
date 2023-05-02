let animal = {
   isHuman:false,
}
/*
let dog = {
    __proto__:animal,
}
*/
/*
let dog={
    legs:4,
};

Object.setPrototypeOf(dog,animal);
*/
/*
let dog = Object.create(animal, { legs:{value:4}});
*/
// document.write(dog.legs+"<br>");


// // to copy object

// let dog_copy = Object(Object.getPrototypeOf(dog),Object.getOwnPropertyDescriptors(dog));

// document.write(dog_copy.isHuman);


// task 1
let dictionary = Object.create(null,
    {
        toString : {value (){
          return Object.keys(this).join();
        },
    }}
    );

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
alert(dictionary);