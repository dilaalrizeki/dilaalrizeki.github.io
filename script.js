// Get Number

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number;
	} else {
		currentNumber += number;
	}
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		console.log(event.target.value);
		inputNumber(event.target.value);
		updateScreen(currentNumber);
	})
});

// Get operator

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
}

// Calculation

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber);
})

const calculate = () => {
	let result = "";

	switch (calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber);
			break;
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber);
			break;
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber);
			break;
		default:
			// statements_def
			break;
	}

	currentNumber = result;
	calculationOperator = '';
}

// Decimal

const decimal = document.querySelector('.decimal');

decimal.addEventListener('clcik', (event) => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
})


const inputDecimal = (dot) => {
	if (currentNumber.includes('.')) {
		return;
	}
	currentNumber += dot;
}

// Clear

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
})

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
}