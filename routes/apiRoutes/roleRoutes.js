const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT role.*, department.name
                 AS department_name
                 FROM role
                 LEFT JOIN department
                 ON role.department_id = department.id`;

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

// Get a single role
router.get('/roles/:id', (req, res) => {
    const sql = `SELECT role.*, department.name
                 AS department_name
                 FROM role
                 LEFT JOIN department
                 ON role.department_id = department.id
                 WHERE role.id = ?`;
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

// Add a role
router.post('/roles', ({ body }, res) => {
    const errors = inputCheck(body, 'name', 'salary', 'department_id');
    if (errors) {
        res.status(400).json({ error: errors});
        return;
    }

    const sql = `INSERT INTO role (name, salary, department_id)
                 VALUES (?,?,?)`;
    const params = [body.name, body.salary, body.department_id];

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

module.exports = router;