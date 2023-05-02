// let company = { // the same object, compressed for brevity
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };

//   function sumSalary(dept){
//      if(Array.isArray(dept)){
//           return dept.reduce((salary,val)=>{return salary+val.salary},0);
//      }else{
//         let sum=0;
//         for(let v of Object.values(dept)){
//             sum= sum+sumSalary(v);
//         }
//         return sum;
//      }
//   }

// document.write(sumSalary(company));

// function fibo(n){
//     if(n==0)return 0;
//     else if(n==1)return 1;
//     else return fibo(n-1)+fibo(n-2);
// }

// document.write(fibo(7));

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


 function printList(list){
     document.write(list.value+"<br>");
     if(list.next!=null){
        printList(list.next);
     }
  }


function reverseList(list){
    if(list==null)return;
    else reverseList(list.next);
    console.log(list.value+"\n");
}
reverseList(list);
//printList(list);