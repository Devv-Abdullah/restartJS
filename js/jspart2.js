/*var numberInput = document.getElementById('numberInput');
var numberInput2 = document.getElementById('numberInput2');

function calculate(){
    console.log(numberInput.value);
    console.log(numberInput2.value);
    var result = document.getElementById('result');
    result.innerHTML = parseInt(numberInput.value) + parseInt(numberInput2.value);
}*/

var numberInput = document.getElementById('numberInput');
var numberInput2 = document.getElementById('numberInput2');
var operation = document.getElementById('operation');

function calculate(){
    console.log(operation.value);
    var result = document.getElementById('result');
    // == (value), === (value and data type)
    if(operation.value === '+'){
    result.innerHTML = parseInt(numberInput.value) + parseInt(numberInput2.value);
    }
    else if(operation.value === '-'){
        result.innerHTML = parseInt(numberInput.value) - parseInt(numberInput2.value);
    }
    else if(operation.value === '*'){
        result.innerHTML = parseInt(numberInput.value) * parseInt(numberInput2.value);
    }
    else if(operation.value === '/'){
        result.innerHTML = parseInt(numberInput.value) / parseInt(numberInput2.value);
    }
}