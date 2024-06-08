function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
