const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

require('dotenv').config();

const dbConfig = {
  host: server.env.DB_HOST,
  user: server.env.DB_USER,
  password: server.env.DB_PASS,
  database: server.env.DB_NAME
};

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get('/getData', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM subscribers');
      res.json(rows);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });