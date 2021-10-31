const db = require('./db/connection');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the employee_tracker database!'
    });
});

// Get all employees
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Get a single employee
app.get('/api/employees/:id', (req, res) => {
    const sql = `SELECT * FROM employee WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

// Delete an employee
app.delete('/api/employees:id', (req, res) => {
    const sql = `DELETE FROM employee WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});


// Create an employee
app.post('/api/employees', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id');
    if (errors) {
        res.status(400).json({ error: errors});
        return;
    }

    const sql = `INSERT INTO employee (first_name, last_name, role_id)
                 VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.role_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

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