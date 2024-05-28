const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');  // Import CORS

const app = express();
const port = 5000;

app.use(cors());  // Use CORS middleware
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'deepak',
  database: 'eventapp'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// API endpoints
app.get('/api/events', (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      res.status(500).send('Internal server error');
      return;
    }
    res.json(results);
  });
});

app.post('/api/events', (req, res) => {
  const { title, date, category, price, image, organizer } = req.body;
  const query = 'INSERT INTO events (title, date, category, price, image, organizer) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, date, category, price, image, organizer], (err, result) => {
    if (err) {
      console.error('Error inserting event:', err);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
