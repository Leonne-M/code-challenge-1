const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

function getTaxRate(salary){
    
    if(salary<424000){
        return 10;
    }
    if(salary>24000 && salary <=32333.33) {
        return 25;
    }
    if(salary>32333.33 && salary <=499999.99){
        return 30;
    }
    if(salary>499999.99 && salary<=799999.99){
        return 32.5;
    }
     return 35;   
}
function salaryafterpaye(salary) {
    const rate=getTaxRate(salary) /100;
    let taxable=salary*rate;
    const income=salary-taxable;
    const net=income+2640;
    return net;
}
function nhifDeductable(income){
    if (income < 6000) {
        return 150;
    }  if (income >= 6000 && income <= 7999) {
        return 300;
    }  if (income >= 8000 && income <= 11999) {
        return 400;
    } if (income >= 12000 && income <= 14999) {
        return 500;
    }  if (income >= 15000 && income <= 19999) {
        return 600;
    } if (income >= 20000 && income <= 24999) {
        return 750;
    }  if (income >= 25000 && income <= 29999) {
        return 850;
    } if (income >= 30000 && income <= 34999) {
        return 900;
    } if (income >= 35000 && income <= 39999) {
        return 950;
    }  if (income >= 40000 && income <= 44999) {
        return 1000;
    }  if (income >= 45000 && income <= 49999) {
        return 1100;
    } if (income >= 50000 && income <= 59999) {
        return 1200;
    }  if (income >= 60000 && income <= 69999) {
        return 1300;
    } if (income >= 70000 && income <= 79999) {
        return 1400;
    }  if (income >= 80000 && income <= 89999) {
        return 1500;
    }  if (income >= 90000 && income <= 99999) {
        return 1600;
    }  
        return 1700;
    
}
 function Netsalary(salary){
    const afterPaye=salaryafterpaye(salary);
    const nhif=nhifDeductable(salary);
     
    return afterPaye - nhif;
}

function main(){
    rl.question("enter your salary\n ",salary =>{
        let s=parseInt(salary);
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
main()

   


