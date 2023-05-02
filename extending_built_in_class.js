class PowerArray extends Array {
  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

let arr = new PowerArray(1, 2, 3, 4);

document.write(arr.isEmpty());

// built in classes do not inherit static methods or properties
