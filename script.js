const keys = document.querySelector('.keys');
const display = document.querySelector('.result');
let displayedNum = '0',
	storedNum = '0',
    operator = '';

keys.addEventListener('click', (e) => {
	const keyPressed = e.target.id;

	// if number is pressed
	if (!isNaN(keyPressed)) {
		displayedNum === '0' ? (displayedNum = keyPressed) : (displayedNum += keyPressed);
		display.innerHTML = displayedNum;
	}

	// if operator is pressed
	else if (keyPressed === '+' || keyPressed === '-' || keyPressed === 'x' || keyPressed === '/') {
		operator = keyPressed;
		if (storedNum === '') {
			operator = keyPressed;
		} else {
			displayedNum = operation(parseInt(displayedNum), keyPressed, parseInt(storedNum)).toString();
		}
		storedNum = displayedNum;
		displayedNum = '0';
		display.innerHTML = storedNum;
	}
	// if equal is pressed
	else if (keyPressed === '=') {
		if (storedNum !== '') {
			displayedNum = operation(parseInt(displayedNum), operator, parseInt(storedNum)).toString();
			storedNum = '';
		}
		display.innerHTML = displayedNum;
	}
	// if clear is pressed
	else if (keyPressed === 'c') {
		displayedNum = '0';
		storedNum = '';
		operator = '';
		display.innerHTML = displayedNum;
	}
	// if back is pressed
	else if (keyPressed === 'back') {
		displayedNum = displayedNum.substring(0, displayedNum.length - 1);
		display.innerHTML = displayedNum;
	}

	console.log({
		keyPressed,
		displayedNum,
		operator,
		storedNum,
	});
});

function operation(num1, operator, num2) {
	let res;
	if (operator === '+') {
		return num1 + num2;
	} else if (operator === '-') {
		res = num1 - num2;
	} else if (operator === 'x') {
		res = num1 * num2;
	} else if (operator === '/') {
		res = num1 / num2;
	}
	return res;
}
