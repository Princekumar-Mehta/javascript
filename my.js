// for testing and verification https://www.timeanddate.com/date/duration.html

/* TestCases
 yyyy/mm/dd
  1988/2/8 // 12,814 days
 1990/7/12 // 11929 days
 2005/3/14 // 6570 days
 2008/8/18 // 5317 days
*/
let oldDates = ["1988/2/8","1990/7/12","2005/3/14","2008/8/18"];
// insert date here
for(let i=0;i<oldDates.length;i++){
    let old_date = new Date(oldDates[i]);
    let new_date = new Date();
    new_date.setHours(0,0,0,0);
    calculateDays(old_date,new_date);
    document.write("<hr>");
}



function calculateDays(old_date,new_date){
    // if date is of future we swap so it will give net number of days
     if(old_date>new_date){
         [old_date,new_date]=[new_date,old_date];
     }

//calculate days
let totalDays = ((new_date.getTime()-old_date.getTime())/(1000*60*60*24));

// calculate months
let totalMonths=0;
if(new_date.getFullYear()===old_date.getFullYear()){
   totalMonths = new_date.getMonth()-old_date.getMonth();
}else if(new_date.getFullYear()===old_date.getFullYear()+1){
    totalMonths += 12-old_date.getMonth();
    totalMonths += new_date.getMonth();
}else{
    totalMonths = (new_date.getFullYear()-old_date.getFullYear()-1)*12;
    totalMonths += 12-old_date.getMonth();
    totalMonths += new_date.getMonth();
}

//calculate year
let totalYear=0;
if(new_date.getFullYear()>old_date.getFullYear()+1){
    totalYear+=new_date.getFullYear()-old_date.getFullYear()-1;

}else if(new_date.getFullYear()===old_date.getFullYear()+1){
     if(new_date.getMonth()>=old_date.getMonth()){
      totalYear+=1;
     }
}
document.write(new_date.getFullYear()+" "+(new_date.getMonth()+1)+" "+new_date.getDate()+"<br>");
document.write(old_date.getFullYear()+" "+(old_date.getMonth()+1)+" "+old_date.getDate()+"<br>");
document.write("Total Day "+totalDays+"<br>");
document.write("Total Month "+totalMonths+"<br>");
document.write("Total Year by calculation "+totalYear+"<br>");
document.write("Total Year by months "+Math.floor(totalMonths/12));
}