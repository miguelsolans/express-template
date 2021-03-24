/*
 * /config/routes
 * Author: Miguel Solans
 * Notes: Router Definition
 */

const express = require('express');
const router = express();

// Define Routes
const RootRoutes = require('../app/routes/index');

// Webapp Root Routes
router.use('/', RootRoutes);


module.exports = router;