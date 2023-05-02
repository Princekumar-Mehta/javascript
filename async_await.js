async function weather() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree");
    }, 2000);
  });
  let bangloeWeathr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 degree");
    }, 5000);
  });

  console.log("Fetching Delhi Weather Please Wait...");
  let delhiW = await delhiWeather;
  console.log("Delhi Weather Fetched");
  console.log("Fetching Banglore Weather Please Wait...");
  let bangloeW = await bangloeWeathr;
  console.log("Banglore Weather Fetched");
  return [delhiW, bangloeW];
}

let a = weather();
a.then((value) => {
  console.log(a);
});

async function fun() {}
