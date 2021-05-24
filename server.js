const mysql = require('mysql2');
const express = require('express');

//adding PORT and app Express//
const PORT = process.env.PORT || 3001;
const app = express();

//adding Express.js middleware//
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //your MYSQL password,
        password: 'Shilohjonezz194',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


// testing connection to PORT//
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


//function that will start the server( KEEP this at the bottom)//
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});