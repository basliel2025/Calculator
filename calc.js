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
        return "Invalid operator";
    }
}
