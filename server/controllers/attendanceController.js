const Attendance = require('../models/Attendance');

// Create a new attendance record
exports.markAttendance = async (req, res) => {
  try {
    const { studentId, date, present } = req.body;
    const attendance = new Attendance({ studentId, date, present });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all attendance records
exports.getAttendance = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTestAttendance = (req, res) => {
  res.json({ message: "Attendance route working" });
};
