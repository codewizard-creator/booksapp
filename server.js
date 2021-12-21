const port = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
require("dotenv").config();



const app = express();

app.use(cors());

app.get('/', (req,res) => {
    res.json('hi');
})

app.get('/authors', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=""+inauthor:${req.query.author}&key=${process.env.REACT_APP_API_KEY}`
        }
     axios(options).then(response => {
        res.json(response.data);
     }).catch(err => res.status(404).json(err));

})


app.get('/titles', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://www.googleapis.com/books/v1/volumes?q=""+intitle:${req.query.title}&key=${process.env.REACT_APP_API_KEY}`
        }
     axios(options).then(response => {
        res.json(response.data);
     }).catch(err => res.status(404).json(err));

})
app.listen(8000, () => 
    console.log(`Server is running on port ${port}`));