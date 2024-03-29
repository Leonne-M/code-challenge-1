//below 70 are ok
//case 1 you are 75
//75-70=5
//5/5=1 demerit point

//case 80
//80-70=1=
//10/5=2 demerit points
const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);

function checkSpeed(speed){
    if(speed<70){
        return "OK";
    }
    let diff=speed-70;
let points=Math.ceil(diff/5);

if(points>12){
    return"Lincense suspended";
}
 return "return points deducted" + points;
}


function main(){
    rl.question("Enter your speed\n",(speed) =>{
        let s=parseInt(speed);
        if(isNaN(s)){
            console.log("Please enter a number\n");
            main();
            return;
        }
        console.log(checkSpeed(s));
        rl.close();
    });

}
main()