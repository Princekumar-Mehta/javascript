// document.write(sum(1)(2)+"<br>");
// document.write(sum(5)(-1));

// function sum(num){
//     return function sum(num2){
//        return num+num2;
//     }
// }

/* .. your code for inBetween and inArray */
// function inBetween(a,b){
//    return (element)=>element>3&&element<6;
// }
// function inArray(arr){
//     return (element)=>arr.includes(element);
//  }
// let arr = [1, 2, 3, 4, 5, 6, 7];

// // alert(arr.filter((element)=>element>3&&element<6));
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) );

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
//by name (Ann, John, Pete)

users.sort(byField('name'));
console.log(users);
//by age (Pete, Ann, John)

 users.sort(byField('age'));
 console.log(users);

function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}