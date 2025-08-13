Calculator Web Application


Overview
This repository contains a fully functional calculator web application developed using HTML, CSS, and JavaScript. The calculator is designed to perform basic arithmetic operations, including addition, subtraction, multiplication, and division, while incorporating advanced features such as percentage calculations, positive/negative number toggling, and decimal input. The application provides a clean, user-friendly interface with robust error handling to ensure a seamless user experience. It is suitable for performing everyday calculations in a web browser.
Features
The calculator offers a range of functionalities to meet various computational needs:

Basic Arithmetic Operations: Supports addition, subtraction, multiplication, and division for performing standard calculations.
Advanced Functions:
Percentage calculations for computing percentages of values.
Positive/negative number toggling to switch the sign of the current input.
Decimal point input for precise calculations involving non-integer numbers.


Memory Clear: Includes a memory clear function to reset the calculator's state.
Responsive Design: Features a modern, visually appealing interface with hover and active states for buttons, ensuring usability across different screen sizes.
Error Handling: Prevents invalid operations, such as division by zero, and provides clear feedback to the user when errors occur.

Technical Implementation
The project is built using a combination of web technologies to ensure modularity, maintainability, and performance:

HTML: The structure of the calculator is created using semantic HTML, with buttons organized in a logical grid layout to mimic a physical calculator.
CSS: Styling is implemented using modern CSS techniques, including Flexbox for layout management, rounded buttons for a polished look, and distinct orange highlights for operator buttons to enhance visual clarity.
JavaScript:
Manages the calculator's state, including the current input, previous input, and selected operation.
Separates display logic (updating the calculator screen) from calculation logic (performing arithmetic operations).
Utilizes event listeners to handle user interactions with all calculator buttons.
Includes key functions such as operate() for performing calculations, displayUpdate() for managing screen output, and specialized handlers for percentage calculations, sign toggling, and memory operations.



Project Structure
The repository is organized as follows:
Calculator/
├── calc.html    # Main HTML file defining the calculator's structure
├── calc.css     # CSS file containing styles for the calculator
├── calc.js      # JavaScript file implementing the calculator's logic
└── README.md    # Documentation for the project

How to Use
To run the calculator locally, follow these steps:

Clone the repository to your local machine using:git clone https://github.com/basliel2025/Calculator.git


Navigate to the project directory:cd Calculator


Open the calc.html file in any modern web browser (e.g., Chrome, Firefox, Edge).
Use the mouse to click on the calculator buttons to perform calculations.

No additional setup or dependencies are required, as the application runs entirely in the browser.
Development Notes
The calculator adheres to the standard arithmetic order of operations (PEMDAS/BODMAS) and provides immediate visual feedback for user actions, such as button presses and calculation results. The codebase is structured to prioritize readability and maintainability, with a clear separation between the presentation layer (HTML/CSS) and the business logic (JavaScript). Comments and logical function names are used throughout the code to enhance understanding for future contributors.
The application is designed to be lightweight and efficient, with no external dependencies, making it easy to deploy and use. Error handling ensures that invalid inputs or operations, such as dividing by zero, are caught and communicated to the user without causing the application to crash.
Future Improvements
While the calculator is fully functional, there are opportunities to enhance its features and usability in future iterations:

Expanded Memory Functions: Add support for memory storage (MS), memory recall (MR), and memory addition (M+) to allow users to store and reuse values during calculations.
Keyboard Input Support: Enable users to interact with the calculator using keyboard inputs, improving accessibility and convenience.
Advanced Mathematical Operations: Incorporate additional functions such as square roots, exponentiation, or trigonometric calculations for more complex use cases.
Calculation History: Implement a history feature to track and display previous calculations, allowing users to review or reuse past results.
Enhanced Styling: Introduce themes or customizable color schemes to improve the visual appeal and user personalization.

Contributing
Contributions to the project are welcome. To contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix:git checkout -b feature/your-feature-name


Make your changes and commit them with descriptive messages:git commit -m "Add your descriptive message here"


Push your changes to your forked repository:git push origin feature/your-feature-name


Open a pull request on the original repository, describing your changes in detail.

Please ensure that your code adheres to the existing style and structure of the project for consistency.


