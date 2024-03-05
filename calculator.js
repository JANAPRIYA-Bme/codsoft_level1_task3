document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';
    let operator = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (buttonText === 'AC') {
                currentInput = '';
                operator = '';
                result = '';
            } else if (buttonText === '=') {
                currentInput = eval(result + operator + currentInput);
                result = '';
                operator = '';
            } else if (['+', '-', '*', '/'].includes(buttonText)) {
                operator = buttonText;
                result = currentInput;
                currentInput = '';
            } else {
                currentInput += buttonText;
            }

            screen.value = currentInput;
        });
    });
});
