
function buttonClickBasic() {
    //debugger;
    document.getElementById("output").innerHTML = document.getElementById("input").value;
    return;
}

function buttonClickAdvanced() {
    //debugger;
    const inputValue = Number(document.getElementById("input2").value);

    let total = 0; 
    for (let i = 0 ;i <= inputValue; i++) {
        total += i;
    }
    /*
    if (Boolean(Number(inputValue)) && Boolean(Number(outputValue))){
        document.getElementById("output2").innerHTML = Number(inputValue) + Number(outputValue);
        return;
    }
    */

    document.getElementById("output2").innerHTML = total;
    return;
}

function calculatorTime(operator) {
    const operand1 = Number(document.getElementById("operand1").value);
    const operand2 = Number(document.getElementById("operand2").value);

    if (!operand1 || !operand2){
        document.getElementById("output3").innerHTML = 'One or Both values input were invalid';
        return;
    }

    if (operator === '+') {
        document.getElementById("output3").innerHTML = (operand1 + operand2);
    }
    if (operator === '-') {
        document.getElementById("output3").innerHTML = (operand1 - operand2);   
    }
    if (operator === '*') {
        document.getElementById("output3").innerHTML = (operand1 * operand2); 
    }
    if (operator === '/') {
        document.getElementById("output3").innerHTML = (operand1 / operand2);
    }
}