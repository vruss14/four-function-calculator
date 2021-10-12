let displayInputs = "";

document.querySelectorAll('.input').forEach(btn => {
    btn.addEventListener('click', () => {

        // Resets the calculator back to 000000 if user desires to clear it

        if(btn.textContent === "AC") {
            displayInputs = "";
            document.getElementById("screen-content").textContent = "000000";
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

// You are looking for a pattern: Number, operator, number
// Once you do this pattern, it becomes another number and then you look again for number, operator, number
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
    console.log(calculation[0]);
    return calculation[0];
}

function addition(a, b) {
    return parseInt(a) + parseInt(b);
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