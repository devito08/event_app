// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bcrypt = require('bcrypt');



// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use('/uploads',express.static('uploads'));//n

// // //multer
// // const storage = multer.diskStorage({
// //   destination:function(req,file,cb){
// //     cb(null,'uploads/');
// //   },
// //   filename:function(req,file,cb){
// //     cb(null,Date.now() + path.extname(file.originalname));
// //   }
// // });
// // const upload = multer({storage:storage});

// // Database connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'deepak',
//   database: 'eventapp'
// });

// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });

// // Existing endpoints
// app.get('/api/events', (req, res) => {
//   db.query('SELECT * FROM events', (err, results) => {
//     if (err) {
//       console.error('Error fetching events:', err);
//       res.status(500).send('Internal server error');
//       return;
//     }
//     res.json(results);
//   });
// });

// app.post('/api/events', (req, res) => {
//   const { title, date, category, price, image, organizer } = req.body;
//   const query = 'INSERT INTO events (title, date, category, price, image, organizer) VALUES (?, ?, ?, ?, ?, ?)';
//   db.query(query, [title, date, category, price, image, organizer], (err, result) => {
//     if (err) {
//       console.error('Error inserting event:', err);
//       res.status(500).send('Internal server error');
//       return;
//     }
//     res.status(201).json({ id: result.insertId, ...req.body });
//   });
// });

// // Registration endpoint
// app.post('/api/register', async (req, res) => {
//   const { firstName, lastName, email, phoneNumber, password, userType } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const query = 'INSERT INTO users (firstName, lastName, email, phoneNumber, password, userType) VALUES (?, ?, ?, ?, ?, ?)';
//     db.query(query, [firstName, lastName, email, phoneNumber, hashedPassword, userType], (err, result) => {
//       if (err) {
//         console.error('Error inserting user:', err);
//         res.status(500).send('Internal server error');
//         return;
//       }
//       res.status(201).json({ id: result.insertId, firstName, lastName, email, phoneNumber, userType });
//     });
//   } catch (error) {
//     console.error('Error hashing password:', error);
//     res.status(500).send('Internal server error');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  }
});

const upload = multer({ storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

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

// Existing endpoints
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

app.post('/api/events', upload.single('image'), (req, res) => {
  const { title, date, category, price, organizer } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null; // Save the path to the uploaded image
  const query = 'INSERT INTO events (title, date, category, price, image, organizer) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [title, date, category, price, image, organizer], (err, result) => {
    if (err) {
      console.error('Error inserting event:', err);
      res.status(500).send('Internal server error');
      return;
    }
    res.status(201).json({ id: result.insertId, title, date, category, price, image, organizer });
  });
});

// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, userType } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (firstName, lastName, email, phoneNumber, password, userType) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, phoneNumber, hashedPassword, userType], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).send('Internal server error');
        return;
      }
      res.status(201).send('User registered successfully');
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
