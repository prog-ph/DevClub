const calculate = (number1, number2, operation) => {
    let result


    switch (operation) {
        case "+":
            result = number1 + number2
            break;
        
            case "-":
                result = number1 - number2
            break;
       
            case "/":
                result = number1 / number2
            break;
        
            case "*":
                result = number1 * number2
            break;
       
           

        default:
            break;

    }
    return result
} 
console.log(calculate(4,5, '*'))