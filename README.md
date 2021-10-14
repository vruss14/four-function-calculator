# Four Function Calculator

## Overview

A calculator built with HTML, CSS, and JavaScript that can perform the four basic arithmetic functions (add, subtract, multiply, and divide).

## Description

This project is a simple UI that features a four function calculator, which can perform basic mathematical functions such as addition, subtraction, multiplication, and division. The calculator can handle more than two inputs (e.g. 2 + 5 * 9) and displays the answer on screen. The calculator also features a clear button, which resets the calculator back to zero so that the user can perform additional calculations.

Creating the calculator's logic was the most challenging part of developing this project. It was a really great exercise for me to be able to think about how a computer would process calculations. Calculating a result based on two numbers and an operator was relatively straightforward, but complexity was introduced when I considered calculations that featured an unknown number of numbers and operators. My solution splits user input into an array, then uses a while loop (since the user's input is uncertain) that runs while the user's input array is greater than 1 (meaning that the calculation hasn't resolved down to one final answer/number yet). The three inputs with the lowest index are spliced out of that array (which should follow the pattern number, operator, number) and the numbers are added/subtracted/multiplied/divided based on the operator. The returned result is re-introduced back into the array via unshift() so that the next calculation (if it exists) will use it properly. The while loop then continues until there is only one item in the array (the final result) which gets returned.

I certainly have a new appreciation for the complex logic that goes into creating a functional and user-friendly calculator. There are many developments I could make to this project, and I could build a scientific calculator with additional capabilities. Overall, I enjoyed thinking through the logic of this project and I feel like it helped me better understand how to conceptualize something I know logically into something that a computer can understand.

Please find the deployed page here: https://vruss14.github.io/four-function-calculator

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

No installation steps are required to view this project. To view the page, visit the URL above. The application's source code can be found on GitHub here: https://github.com/vruss14/four-function-calculator.

## Usage

This page includes a four function calculator that can perform basic mathematical calculations. It features responsive design and can be viewed on all devices.

Below is a screenshot of the deployed page:

![screenshot of webpage for desktop](./assets/images/calc-screenshot-desktop.png)

## Credits

Valerie Russell was the sole contributor to this project. Contact her at vruss14@gmail.com.

### References

* [Background image by Lum3n from Pexels](https://www.pexels.com/photo/black-click-pen-on-white-paper-167682/)
* [Favicon by pngrepo.com](https://www.pngrepo.com/svg/209382/division)

