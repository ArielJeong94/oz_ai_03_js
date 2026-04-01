n1 = 10
n2 = 20

function calculator(num1, num2, operator) {
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    };
    return result;
};

console.log(calculator(n1, n2, '+'));
console.log(calculator(n1, n2, '-'));
console.log(calculator(n1, n2, '*'));
console.log(calculator(n1, n2, '/'));