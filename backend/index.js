/* eslint-env node */
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',       // <-- put your MySQL password here if you have one
  database: 'attendance_db'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL!');
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend API is working!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

