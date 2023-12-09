const keys = document.querySelector('.keys');
const display = document.querySelector('.result');
let num1 = '',
	operator = '',
	num2 = '';

keys.addEventListener('click', (e) => {
	//pressed a number
	const keyPressed = e.target.id;
	
	if (!isNaN(keyPressed)) {
        if (num1==='' || num1==='0') {
            (num1==='0') ? num1=keyPressed : num1 += keyPressed;
        }
        else {
            (num2==='0') ? num2=keyPressed : num2 += keyPressed;
        }
	} 
    else if (keyPressed === '+' || keyPressed === '-' || keyPressed === 'x' || keyPressed === '/') {
		// if num2 empty
		if (num2 === '') {
            operator = keyPressed;
        // num2 not empty
		} else {
            num1 = operation(parseInt(num1), keyPressed, parseInt(num2)).toString();
            console.log(num1);
			num2 = '';
		}
	}
    else if (keyPressed === '=') {
        console.log('im at equal')
        if (num2 !== '') {

            num1 = operation(parseInt(num1), operator, parseInt(num2)).toString();
            num2='';
        }
    }
    else if (keyPressed === 'c') {
		num1 = '0';
		num2 = '';
		operator = '';
	}
    
    else if (keyPressed === 'back') {
        (num2!=='') ? num2=num2.substring(0, num2.length-1) : num1=num1.substring(0, num1.length-1);
    }

    console.log({
        'keypressed':keyPressed,
        'num1':num1,
        'operator':operator,
        'num2':num2
});
    (num2!=='') ? display.innerHTML = num2 : display.innerHTML = num1;
});


function operation(num1, operator, num2) {
    let res;
    if (operator === '+'){
        return num1 + num2;
    }
    else if (operator === '-'){
        res = num1 - num2;
    }
    else if (operator === 'x'){
        res = num1 * num2;
    }
    else if (operator === '/'){
        res = num1/num2;
    }
	
    console.log('inside operation', num1, num2, operator, res);
    return res;
}

