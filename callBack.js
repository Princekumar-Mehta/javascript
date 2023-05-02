// callback based style of async pogramming.

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
  script.onload = function () {
    callback(null, script);
  };
  script.onerror = function () {
    callback(new Error("src not loaded"), script);
  };
}

loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  function (error, script) {
    if (error) {
      console.log(error);
      alert(script.src + " not loaded");
    } else {
      alert(script.src + " loaded");
    }
  }
);

// callback hell/ pyramid of doom: multiple callback inside another callbacks and it makes difficult to read and manage
