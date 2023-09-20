# E2E Testing Project with Cypress

## Project Overview

Welcome to my final project for the E2E (End-to-End) testing course, where I have utilized Cypress in JavaScript. This project showcases end-to-end testing of a web application. The test script starts with user registration and login through API calls. It then employs the Page Object Model (POM) design pattern for efficient navigation through the application. The script interacts with an e-commerce platform by adding two products, validating product names and prices stored in `inventory.json` using `cy.fixture`. Finally, at the conclusion of the test, the user account created at the script's outset is deleted through a DELETE request.

**Important Note**: If the script doesn't work initially, please wait for 30 seconds and try again. The hosting environment is on a free tier and may go into an inactive state when not receiving requests.

## Project Structure

The project is structured as follows:

### 1. User Registration and API Authentication

- The test script begins by registering a new user and logging into the system through API endpoints.

### 2. Page Object Model (POM)

- POM is employed to maintain organized and modular test scripts. Each page or component of the web application is represented in separate JavaScript files for better maintainability.

### 3. E-commerce Interaction

- The test script navigates through the web application using POM and interacts with the e-commerce platform to simulate adding two products to the cart.

### 4. Data Validation

- Validation of product names and prices is performed using data stored in `inventory.json`, which is accessed via `cy.fixture`.

### 5. Cleanup

- To ensure a clean state after testing, the script concludes by sending a DELETE request to remove the user account created at the beginning of the script.

## Getting Started

To run the E2E tests locally, follow these steps:

1. Clone this repository to your local machine:

git clone https://github.com/Emilc0ff/E2E-Ecommerce-Cypress-Project.git

2. Navigate to the project directory:

cd E2E-Ecommerce-Cypress-Project

3. Install project dependencies:

npm install

4. Run Cypress test:

npm test run



