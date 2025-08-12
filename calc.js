let current = '0';
let firstNumber = null;
let operatord = null;
let displayReset = false;
function operate(num1, operator, num2){
    const firstNumber = num1;
    const secondNumber = num2;
    if(operator == '+'){
        return firstNumber + secondNumber;
    }
    else if(operator == '*'){
        return firstNumber * secondNumber;
    }
    else if(operator == '-'){
        return firstNumber - secondNumber;
    }
    else if(operator == '/'){
        if(secondNumber == 0){
            return'Error!, you can not divide number with zero';
        } else{
            return firstNumber/secondNumber;
        }
    }
    else{
        return "Invalid operator!";
    }
}
const element = document.querySelector('.display');
function displayUpdate(value){
    element.value = value;
}
function clicked(number){
    if(displayReset === true){
        current ='0';
    }
    if(current ==='0'){
        current = number;
    }
    else{
        current += number;
    }
    displayUpdate(current);
    displayReset = false;
}
function operators(op){
    operatord = op;
    if(firstNumber !== null){
        const result = operate(firstNumber,operatord, parseFloat(current));
        firstNumber = result;
        displayReset = true;
        displayUpdate(result);
    }
    else{
        firstNumber = parseFloat(current);
    }
}
function equalsTo(){
    if(firstNumber!== null && operatord!== null){
        result = operate(firstNumber,operatord,parseFloat(current));
        displayUpdate(result);
        displayReset = true;
        firstNumber = null;
        operatord= null;
    }
}
function clear(){
    current = '0';
    firstNumber = null;
    operatord = null;
    displayReset = false;
    displayUpdate(current);
}
function decimal(){
    if(displayReset){
        current = '0.';
        displayReset = false;
    }
    else if(!current.includes('.')){
        current +='.';
    }
    displayUpdate(current);
}

const buttons = document.querySelectorAll('.num');
buttons.forEach(k =>{
    k.addEventListener('click', function(e){
        const number = e.target.textContent;
    clicked(number);
});
});
const oper = document.querySelectorAll('.op');
oper.forEach(o=>{
    o.addEventListener('click', function(e){
        const opr = e.target.textContent; 
         operators(opr);
         displayReset= true;
});
});

const Equal = document.querySelector('.equal');
Equal.addEventListener('click', function(){
    equalsTo();
});

const cleares = document.querySelector('.clear');
cleares.addEventListener('click', function(){
    clear();
});
const dots = document.querySelector('.dot');
dots.addEventListener('click', function(){
    decimal();
});