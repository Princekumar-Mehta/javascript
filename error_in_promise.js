new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert);
