let displayInputs = "";

document.querySelectorAll('.input').forEach(btn => {
    btn.addEventListener('click', () => {

        // Resets the calculator back to 0 if user desires to clear it

        if(btn.textContent === "AC") {
            displayInputs = "";
            document.getElementById("screen-content").textContent = "0";
            return;
        }

        if(btn.textContent === "=") {
            calculate();
            return;
        }

        // Adds spacing between symbols (but not numbers) to make the interface easier to read

        if(parseInt(btn.textContent) || btn.textContent === "0" || btn.textContent === ".") {
            displayInputs += btn.textContent;
        } else {
            displayInputs += ` ${btn.textContent} `;
        }

        document.getElementById("screen-content").textContent = displayInputs;

    })
})

// Calculation pattern: Number, operator, number
// The calculator can use this pattern and return another number, which then feeds into the next calculation
// unshift() adds the returned number back to the beginning of the calculation array to continue calculating left to right
// A while loop is used for uncertain inputs; we aren't sure how many numbers and operators the user will input

function calculate() {
    let calculation = displayInputs.split(' ');

    while(calculation.length > 1) {
        let splice = calculation.splice(0, 3);

        if(splice.includes('+')) {
            calculation.unshift(addition(splice[0], splice[2]));
        } else if (splice.includes('–')) {
            calculation.unshift(subtraction(splice[0], splice[2]));
        } else if (splice.includes('x')) {
            calculation.unshift(multiply(splice[0], splice[2]));
        } else if (splice.includes('/')) {
            calculation.unshift(divide(splice[0], splice[2]));
        } else {
            console.log("Error: Please try again.")
        }
    }
    displayResult(calculation[0]);
    return calculation[0];
}

// Needs to use parseFloat to work with integers AND decimals properly

function addition(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function displayResult(result) {
    displayInputs = "";
    document.getElementById("screen-content").textContent = result;
}