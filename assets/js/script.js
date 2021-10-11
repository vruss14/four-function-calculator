let displayInputs = "";

document.querySelectorAll('.input').forEach(btn => {
    btn.addEventListener('click', () => {

        // Resets the calculator back to 000000 if user desires to clear it

        if(btn.textContent === "AC") {
            displayInputs = "";
            document.getElementById("screen-content").textContent = "000000";
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