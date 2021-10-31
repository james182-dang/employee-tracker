const inquirer = require('inquirer');

const viewTables = () => {
    return inquirer
      .prompt([
          {
              type: 'list',
              name: 'welcome',
              message: 'Welcome to the employee tracker! What would you like to do?',
              choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a department', 'Add a role', 'Add an employee', 'Update Employee Role']
          }
      ])
}