const express = require('express');
const router = express.Router();

// Employee routes
router.use(require('./employeeRoutes'));

// Role routes
router.use(require('./roleRoutes'));

// Department routes
router.use(require('./departmentRoutes'));

module.exports = router;