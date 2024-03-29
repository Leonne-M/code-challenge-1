# My app

This app contains 3 sections
1. Codeproblem1.js
2.  Problem2.js
3. Problem3.js

## Codeproblem1.js
This code is used to calculate the grade of an individual.
The student to has to input a valid text(number) or else the code wont fully execute and will call out itself till the appropriate text is inserted.This is carried out by the 

    function  main(){

rl.question('What is your mark? ',"", (mark) => {

let  s  =  parseInt(mark);

if (isNaN(s)){

console.log("please enter a number \n");

main()

return;}

let  grade=calculateGrade(s)

console.log("your grade is", +  grade  +  "\n");

rl.close();

});

} 
## Problem2.js
This code is specifically used to calculate the speed of a driver.Once the speed is input the following code is run

    function  checkSpeed(speed){

if(speed<70){

return  "OK";

}

let  diff=speed-70;

let  points=Math.ceil(diff/5);

  

if(points>12){

return"Lincense suspended";

}

return  "return points deducted"  +  points;

}

  
  

function  main(){

rl.question("Enter your speed\n",(speed) =>{

let  s=parseInt(speed);

if(isNaN(s)){

console.log("Please enter a number\n");

main();

return;

}

console.log(checkSpeed(s));

rl.close();

});
}
With the help of this function points are calculated when the speed exceeds the optimum.Once the points exceed a certain point the individual's license is suspended till further notice..

## Problem3.js
This code is used to calculate the net salary of an individual once all deductions are done.The salary is inputted and it immediately brings the amount of money post deductions.this is made possible with the following code;

    function  getTaxRate(salary){

if(salary<424000){

return  10;

}

if(salary>24000  &&  salary  <=32333.33) {

return  25;

}

if(salary>32333.33  &&  salary  <=499999.99){

return  30;

}

if(salary>499999.99  &&  salary<=799999.99){

return  32.5;

}

return  35;

}

function  salaryafterpaye(salary) {

const  rate=getTaxRate(salary) /100;

let  taxable=salary*rate;

const  income=salary-taxable;

const  net=income+2640;

return  net;

}

function  nhifDeductable(income){

if (income  <  6000) {

return  150;

} if (income  >=  6000  &&  income  <=  7999) {

return  300;

} if (income  >=  8000  &&  income  <=  11999) {

return  400;

} if (income  >=  12000  &&  income  <=  14999) {

return  500;

} if (income  >=  15000  &&  income  <=  19999) {

return  600;

} if (income  >=  20000  &&  income  <=  24999) {

return  750;

} if (income  >=  25000  &&  income  <=  29999) {

return  850;

} if (income  >=  30000  &&  income  <=  34999) {

return  900;

} if (income  >=  35000  &&  income  <=  39999) {

return  950;

} if (income  >=  40000  &&  income  <=  44999) {

return  1000;

} if (income  >=  45000  &&  income  <=  49999) {

return  1100;

} if (income  >=  50000  &&  income  <=  59999) {

return  1200;

} if (income  >=  60000  &&  income  <=  69999) {

return  1300;

} if (income  >=  70000  &&  income  <=  79999) {

return  1400;

} if (income  >=  80000  &&  income  <=  89999) {

return  1500;

} if (income  >=  90000  &&  income  <=  99999) {

return  1600;

}

return  1700;

}

function  Netsalary(salary){

const  afterPaye=salaryafterpaye(salary);

const  nhif=nhifDeductable(salary);

return  afterPaye  -  nhif;

}

  

function  main(){

rl.question("enter your salary\n ",salary  =>{

let  s=parseInt(salary);

if(isNaN(s)){

console.log("please input a number\n ");

main();

return;

}

console.log(

"If your gross salary is",salary, "Your net is",Netsalary(salary)

);

rl.close();

});

  

}