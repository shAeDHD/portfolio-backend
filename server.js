const mongoose = require('mongoose')

const Project = require('./models/Project')
// import Project from './models/Project'

mongoose.connect('mongodb://127.0.0.1')
const db = mongoose.connection;


db.on('error', err => {
    console.log(`DB connection error`, err);
    process.exit( 1 ); // exit the program
})


db.once('open', () => {
    console.log(`Success! DB connected, model loaded.`);
    // process.exit( 0 )
})

const projectOne = await Project.create({
    title: 'Example One',
    description: 'lorem isp',
    screenshots: 'currently no image available',
    frontend: [{
        utilised: true,
        language: 'React',
        symbol: 'nuclear symbol'
    }],
    backend: [{
        utilised: true,
        language: 'Ruby on Rails',
        symbol: 'tentacles?'
    }]
});

console.log(article);

// await projectOne.save();