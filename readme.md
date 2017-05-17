# BTPN Retail Exercise

This readme file will give you an overview of the application.

## About
This exercise simulates a simple retail POS application with the following features:

1. CRUD for customers (users), items (goods), and transactions.
2. Simple login/logout feature.
3. Conditional discounts:
    1. If a customer is an employee, he/she will get a 30% discount.
    2. If a customer is an affiliate, he/she will get a 15% discount.
    3. If a customer has been a customer for over 2 years, he/she will get a 5% discount.
    4. The discount doesn't apply to items within the 'grocery' category.
    5. For each $100 spent on a transaction, a customer is eligible for a $5 discount. For example, a $400 transaction will get 400/100*5 = $20 discount, having a grand total of $380.
4. Unit Tests

## The application uses the following technologies:
1. MySQL for database.
2. Spring Boot for Backend.
3. Angular (v2) for Frontend.

## Pre-requisites
Before running the application, please make sure you have the following installed:
1. Maven
2. NodeJS with NPM installed
3. MySQL

## How to run the application:
1. Run MySQL (default DB URL is http://localhost:3306/brsdb, please adjust the configuration within *application.properties* file located in ***\backend\src\main\resources\application.properties*** accordingly).
2. Import the database from the script file located in ***\backend\brsdb-script.sql***.
3. Run ***mvn spring-boot:run*** from the **backend** directory using Command Prompt/Bash/PowerShell.
4. Run ***npm install*** from the **frontend** directory using another instance of Command Prompt/Bash/Powershell. Afterwards, run ***npm start*** using the same Terminal instance.
5. Access the application from **http://localhost:4200**.