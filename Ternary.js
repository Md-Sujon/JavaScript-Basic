const money=100;
let food;
if(money>=100){
    food='Birany';
}
else{
    food='alu vorta';
}

// ternary
// let food=money>100?'borany':'alu-vorta';

// string to Number
const Number1=20+'';
console.log(Number1);
// number to String
const numer= +'20';
console.log(numer);

// default parameter
function add(num1,num2){
    num2=num2||5;
    return num1+num2;
}
const log=add(30,100)
console.log(log);