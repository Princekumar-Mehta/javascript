// fields or methods defined with _ are not supposed to be used outside.
/*
class Student {
  constructor(studentName, phoneNumber) {
    this._studentName = studentName;
    this._phoneNumber = phoneNumber;
  }

  getStudentName() {
    return this._studentName;
  }

  setPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 10) {
      alert("invalid phone number");
    } else {
      this._phoneNumber = phoneNumber;
    }
  }

  getPhoneNumber() {
    return this._phoneNumber;
  }
}

let student1 = new Student("prince", 1234567890);
document.write(student1.getPhoneNumber() + "<br>");
document.write(student1.setPhoneNumber(1122334455));
document.write(student1.getPhoneNumber() + "<br>");
document.write(student1.getStudentName());
document.write(student1.setStudentName()); // we can't set student name as it is read only
*/
class Class1 {
  #name = "";
  constructor(name) {
    this.#name = name;
  }
}

let obj = new Class1("Prince");

///document.write(obj.#name); // error as it is private
