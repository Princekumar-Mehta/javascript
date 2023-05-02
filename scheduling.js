/*let v=0;
let timerId = setInterval(() => {
    if(v%2==0){
        document.write("no<br>");
    }else{
        document.write("yes<br>");
    }
    v++;
}, 1);
document.write(timerId); */// timer identifier

//clearTimeout(timerId);
//alert(timerId);


// let timerId = setTimeout(()=>document.write("5 sec passed"),5000);

//Pass a function, but don’t run it means pass reference

// let timerId = setInterval(()=>{document.write("hello<br>")},2000);

// setTimeout((()=>clearInterval(timerId)),5000);

// nested setTimeOut


// function printNumbers(from,to){
//      let current=from;
//     //  let timerID=setInterval(()=>{
//     //     current!=to+1?document.write(current):clearInterval(timerID);
//     //     current++;
//     // },1000);

//     let timerID = setTimeout(function tick(){
//         current!=to+1?document.write(current):clearInterval(timerID);
//         current++;
//         current!=to+1?setTimeout(tick,1000):"";

//     },1000);
// }
// printNumbers(1,10);

// to use nested setTimeout we have to use named fucntion inside outer setTimeOut
