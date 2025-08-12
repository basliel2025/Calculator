#Calculator Project


Overview
This repository contains a fully functional calculator web application built with HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations including addition, subtraction, multiplication, and division, along with additional features like percentage calculations, sign toggling, and decimal input.


Features
Basic Operations: Addition (+), Subtraction (-), Multiplication (×), Division (÷)

Advanced Functions:

Percentage calculations (%)

Positive/Negative number toggling (+/-)

Decimal point input

Memory Clear (MC)

Responsive Design: Clean interface with button hover/active states

Error Handling: Prevents division by zero and invalid operations

Technical Details
Implementation
HTML: Structured with semantic button grouping

CSS: Modern styling with flexbox, rounded buttons, and orange operator highlights

JavaScript:

State management for current input and operations

Clean separation of display logic from calculation logic

Event listeners for all calculator buttons

Key Functions
operate(): Core calculation logic

displayUpdate(): Handles screen output

Specialized handlers for percentage, sign toggle, and memory operations

How to Use
-Clone the repository

-Open calc.html in any modern web browser

Perform calculations using mouse clicks on the calculator buttons


Project Structure
text
Calculator/
├── calc.html          
├── calc.css         
├── calc.js            
└── README.md         


Development Notes
The calculator follows standard arithmetic order of operations and provides visual feedback for all actions. The code is organized to be readable and maintainable, with clear separation between presentation and business logic.

Future improvements could include:

Additional memory functions (MS, MR, M+)

Support for keyboard input

More advanced mathematical operations

History tracking of calculations


