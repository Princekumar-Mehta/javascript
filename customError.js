class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

let pwd = "Princ";

function checkPwdLength(pwd) {
  if (pwd.length < 6) {
    throw new ValidationError("Insufficient Length of Password");
  }
}

try {
  checkPwdLength(pwd);
} catch (error) {
  //   console.log(error);
  //   console.log("\n");
  //   console.log(error instanceof Error);
  //   console.log("\n");
  //   console.log(error instanceof ValidationError);
  if (error instanceof ValidationError) {
    alert("pwd length should be at least 6");
  } else {
    throw error;
  }
  // catch block should be always simple there should be no possibility of error in catch
} finally {
  console.log(
    "this will always run and can be used for cleanup even if you return in try or catch"
  );
}
