const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

//- A > 79
//- B - 60 to 79
//- C - 59 to 49
//- D - 40 to 49
// E - less than 40.
 
function calculateGrade(marks){
    if(marks>79){
        return "A";
    }
    if(marks >= 60 && marks <= 79){
        return "B";
    }
    if(marks >= 49 && marks <= 59){
        return "C";
    }
    if(marks >= 40 && marks <= 49){
        return "D";
    }
    if(marks <40){
        return "E";
    }
 }
 //console.log(calculateGrade(70))
 //user input
 //system solves user input problems

 
function main(){
    rl.question('What is your mark? ', (mark) => {
        let s = parseInt(mark);
        if (isNaN(s)){
            console.log("please enter a number \n");
            main()
                return;}
            let grade=calculateGrade(s)
            console.log("your grade is"+ grade + "\n");
            rl.close();
        });
}
main()
