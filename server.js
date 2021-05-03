
// This is the server file


// dependencies
const express = require('express');
const cors = require('cors');
//const db = require('./db');

// create the server
const app = express();
const port = process.env.PORT || 4002;

// parse json
app.use(express.json());
app.use(cors());

// DB home display
app.get('/', (request, response) => {
    response.send('<h1>Welcome to project2 service.</h1>');
});



// Four needed functions

// Add a place
app.post('/place', (request, response) => {
    // TODO
    let name = request.body.name;
    let address = request.body.address;
    let place = {name: name, address: address};
    response.send(`${name} was added successfully.`);
});

// Get all of the places
app.get('/places', (request, response) => {
    // TODO
    response.json(places);
});

// Add a review to a given place
app.post('/review/:placeName', (request, response) => {
    // TODO
    let name = request.params.placeName;
    let username = request.body.username;
    let review = request.body.review;
    response.send(`The review for ${name} was added successfully.`);
});

// A get method that searches for all of the places that match
// either the place name or address.
app.get('/search/:placeName/:location', (request, response) => {
    // TODO
    let name = request.params.placeName;
    let location = request.params.location;
    response.send('<h1>Welcome to project2 service.</h1>');
});

// start the server
app.listen(port, () => console.log('Listening on port ' + port));