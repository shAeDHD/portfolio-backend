const express = require('express');
const app = express();
const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT} ...`);
})      //  close app.listen(PORT, () => {})

// ------------- Mongoose DB initialisation ------------- //
const mongoose = require('mongoose')
const Project = require('./models/Project.js')

mongoose.connect('mongodb://127.0.0.1/');
const db = mongoose.connection;
// ------------- -------------------------- ------------- //

//      Database Error prompt
db.on('error', err => {
    console.log(`Error connecting to DB server`, err);
    process.exit( 1 );  //  quit the program
})      //  close db.on('error')

//      Home route
app.get('/', (req, res) => {
    console.log(`Root route was requested`);
    res.json({ hello: 'there' })
})      //  close app.get('/')

//      List route of all projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json( projects );

    } catch(err) {
        console.error(`Error loading all projects:`, err);
        res.sendStatus( 422 ); //   'Unprocessable entity'
    }

})      //  close app.get('/projects')

// TODO - configure front end params routes
//      Search route for projects according to languages used in projects 
// app.get('/projects/search/:frontEnd/:backEnd', async (req, res) => {

//     try {
//         const projects = await Project.find({
//             frontLanguage: req.params.frontEnd,
//             backLanguage: req.params.backEnd 
//         })
//         res.json(projects)

//     } catch(err) {
//         console.error(`Error searching flights`, req.params, err);
//         res.sendStatus( 422 );
//     }

// })      //  close app.get('/projects/search/:frontEnd/:backEnd')