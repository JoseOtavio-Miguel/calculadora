🧮 React Calculator

First project developed in the React. A simple calculator built with React and styled-components, allowing basic operations such as addition, subtraction, multiplication, and division.
This project demonstrates the use of hooks (useState), componentization, and event handling in React.

✨ Features

- Enter numbers and concatenate multiple digits.
- Basic operations: addition (+), subtraction (-), multiplication (×), division (÷).
- "C" button to clear the display.
- Displays results when clicking "=".
- Supports chained operations (e.g., 17 + 9 = 26, then + 5 = 31).

🛠 Technologies Used

- React – library for building user interfaces.
- Styled-components – for modular component styling.
- JavaScript/JSX – logic and app structure.
- CSS – additional styling.

📁 Project Structure

calculadora/
│
├── src/
│   ├── components/
│   │   ├── Button.js       # Reusable button component
│   │   └── Input.js        # Calculator display component
│   ├── style.js            # Main styles using styled-components
│   ├── App.js              # Main app component
│   └── App.css             # Global styles
├── package.json
└── README.txt

🚀 How to Run

1. Clone the repository:

   git clone <(https://github.com/JoseOtavio-Miguel/calculadora.git)>

2. Install dependencies:

   npm install

3. Start the project:

   npm start

The app will automatically open in your browser at http://localhost:3000.

🎨 Layout & UI

- Main display (Input) shows the current number.
- Buttons (Button) allow interaction with numbers and operations.
- Organized layout using Rows to maintain a classic calculator look.
- Modern and responsive styling with styled-components.

💡 Next Steps

- Add support for percentage (%) operations.
- Enhance user experience with button animations.
- Create an operation history feature.

📝 Credits

- Developed by: [JoseOtavio-Miguel]
- Based on React, Hooks, and Styled-components concepts.
- Learning reference: Official React and Styled-components documentation.
