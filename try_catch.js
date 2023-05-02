/*
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
  }

  // Usage
  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }

    return user;
  }

  // Working example with try..catch

  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No property: name
      alert(err.name); // PropertyRequiredError
      alert(err.property); // name
    } else if (err instanceof SyntaxError) {
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it
    }
  }
//   */

//custom error
/*
  class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }

  function test() {
    throw new ValidationError("Whoops!");
  }

  try {
    test();
  } catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
  }
  */

  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // _ is a function declared in the loaded script
  });