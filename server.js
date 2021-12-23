
const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const path = require("path");
require("dotenv").config();



const app = express();

app.use(cors());

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
/*
****FOR PRODUCTION****
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
*/
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`));