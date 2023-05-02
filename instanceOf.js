/*
class Class1 {}
class Class2 extends Class1 {}
class Class3 extends Class2 {}

let obj1 = new Class3();
let obj2 = new Class2();

document.write(obj1 instanceof Class1);
document.write(obj1 instanceof Class2);
document.write(obj1 instanceof Class3);
document.write(obj2 instanceof Class1);
document.write(obj2 instanceof Class2);
document.write(obj2 instanceof Class3);
*/
// we can use toString method as instanceof
// instanceof checks prototype of both
let objectToString = Object.prototype.toString;

document.write(objectToString.call(123));
