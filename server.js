const db = require('./db/connection');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use api routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the employee_tracker database!'
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

function start() {
    return inquirer
      .prompt([
          {
              type: 'list',
              name: 'welcome',
              message: 'Welcome to the employee tracker! What would you like to do?',
              choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a department', 'Add a role', 'Add an employee', 'Update Employee Role']
          }
      ])
      .then(choice => {
          let { welcome } = choice;

          if (choice = 'View All Departments') {
            
          } else if (choice = 'View All Roles') {

          } else if (choice = 'View All Employees') {

          } else if (choice = 'Add a department') {

          } else if (choice = 'Add a role') {

          } else if (choice = 'Add an employee') {

          }
      })
}