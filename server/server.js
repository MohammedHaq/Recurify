const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL Connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Unable to connect to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Route to fetch clients data
app.get('/getData', (req, res) => {
    db.query('SELECT * FROM subscribers', (error, results) => {
        if (error) {
            console.error('Error fetching clients:', error);
            res.status(500).send({ error: 'Database query failed' });
            return;
        }
        res.send(results);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});