const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector('.calculator-screen');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const back = document.querySelector('.back');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

back.addEventListener('click', () => {
    removeEnd();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = (parseFloat(prevNumber)*10 + parseFloat(currentNumber)*10)/10;
            break;
        case "-":
            result = (parseFloat(prevNumber)*10 - parseFloat(currentNumber)*10)/10;
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
    }
    currentNumber = result;
    calculationOperator = '';
};

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

removeEnd = () => {
    currentNumber = Math.floor(currentNumber/10);
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
});