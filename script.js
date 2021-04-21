const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (op_a, op_b, operator) => {
    const a = parseInt(op_a);
    const b = parseInt(op_b);
    switch(operator){
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            break;
    }
}

function populateDisplay(b){

    const div = document.createElement('div');
    div.classList.add('input')
    div.textContent = String(b);
    
    const display = document.querySelector('.display');

    display.appendChild(div);
    
}

function getDisplayValue() {
    const currentDisplay = document.querySelectorAll('.input');
    let displayValue = "";
    currentDisplay.forEach(value => displayValue += value.innerText)
    // console.log(displayValue);

    return displayValue;
}

function clearDisplay() {
    document.querySelectorAll('.input').forEach(element => element.remove())
}

window.addEventListener('DOMContentLoaded', () => {
    
    let input = '';
    let problem = [];
    
    const numRegex = /\d/;
    const operatorRegex = /[\.\/\*\+\-]/;
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonClicked = e.target.textContent;
            
            let displayValue = getDisplayValue();
            


            if(buttonClicked.match(numRegex)){
                input += buttonClicked;
                populateDisplay(buttonClicked);
            }
            
            if(buttonClicked.match(operatorRegex)){
                populateDisplay(buttonClicked);
                problem.push(input);
                problem.push(buttonClicked);
                input = '';
            }
            
            if(buttonClicked === '='){
                if(input && problem.length >= 2){
                    problem.push(input);
                    input = '';
                    console.log(problem);
                    clearDisplay();
                    const result = operate(problem[0], problem[2], problem[1]);
                    populateDisplay(result)
                }

            }

            if(buttonClicked === 'Clear'){
                clearDisplay();
                problem = [];
                input = '';
            }

        })
            
    })
})