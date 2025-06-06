const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Configs
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const attendanceRoutes = require('./routes/attendanceRoutes'); 
app.use('/api/attendance', attendanceRoutes); // mount after middlewares


// Sample route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const attendanceRoutes = require('./routes/attendanceRoutes');

app.use('/api/attendance', attendanceRoutes);
