function multiply_all(num1,num2,...others){
      let ans = num1*num2;
      others.forEach((element)=>ans*=element);
      return ans;
}

console.log(multiply_all(1,2,3,445,2,3,21,3));

let arr=[1,2,3,2,3,1,3,2];
console.log(multiply_all(...arr));