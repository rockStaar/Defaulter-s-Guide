const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.post('/mark', attendanceController.markAttendance);
router.get('/all', attendanceController.getAttendance);
router.get('/test', attendanceController.getTestAttendance); // This is the endpoint for Postman testing

module.exports = router;
