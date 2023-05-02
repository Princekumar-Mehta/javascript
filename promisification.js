// loadscript using callback

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
  script.onload = () => {
    callback(null, script);
  };
  script.onerror = () => {
    callback(new Error(`${script} couldn't load`));
  };
}
/*
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  function callback(error, src) {
    if (error) {
      console.error(error);
    } else {
      console.log("script added");
    }
  }
);
*/

// promise for loadscipt
/*
function loadScriptPromise(src) {
  return new Promise((resolve, reject) => {
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
      function callback(error, script) {
        if (error) {
          reject(error);
        } else {
          resolve(script);
        }
      }
    );
  });
}
let p1 = loadScriptPromise(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
);

p1.then((script) => {
  console.log(script.src + "\t" + "loaded");
});
*/

function promisify(f) {
  return function wrapper(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
      args.push(callback);
      f.call(this, ...args);
    });
  };
}

let loadScriptPromise = promisify(loadScript);
loadScriptPromise(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
).then((value) => {
  console.log(value);
});
