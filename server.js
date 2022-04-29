const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  },
  console.log(`Connected to the books_db database.`)
);

app.get('/api/movies', (req, res) => {
db.query('SELECT * FROM movies' , function (err, results) {
    res.json(results);
  });
});

app.post('/api/add-movie', (req, res) => {
    const addMovie = req.body;

});

app.get('/api/update-review', (req, res) => {
 res.json("woof");
});

app.put('/api/review/:id', (req, res) => {
    res.json("quack");
});

app.delete('/api/movie/:id', (req, res) => {
 res.json("wooga");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});