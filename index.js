// import the pets array from data.js
const pets = require('./data');
const path = require("path");
const cors = require("cors")

// init express app
const express = require('express');

const app = express();
app.use(cors());

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    //do this with res.sendFile. We can send the whole html file.
    //res.sendFile("/home/jerrysunix/reactStuff/Coursework/block31/petFinder/Unit4.PetFinder.Starter/public/index.html")
    res.sendFile("index.html",{ root: path.join(__dirname, "./public")})


});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    //send back the information from the pets database through res
    res.send(pets)


});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    //do this by doing an express query on the req, then sending back the pets in with the res
    const owner = req.query.owner;
    console.log(owner);


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);
    console.log(`pet: ${pet}`)

    // send the pet as a response
    //send back a response as pet
    //res.send(pet);
    if (pet !== undefined) {
        res.send(pet);
    } else {
        res.send("No such owner exists!");
    }

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    //do this by getting the query info from the request
    const name= req.params.name;


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);


    // send the pet as a response
    //make sure it's not null, and send back a pet object
    console.log(pet);
    if (pet!== undefined) {
        res.send(pet);
    } else {
        res.send("no such pet name exists here!");
    }
    

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;