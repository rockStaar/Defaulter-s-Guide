// server/models/attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  present: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
