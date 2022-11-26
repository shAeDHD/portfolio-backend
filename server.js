import mongoose from 'mongoose';
import Project from './models/Project.js'

mongoose.connect('mongodb://127.0.0.1')
const db = mongoose.connection;

db.on('error', err => {
    console.log(`DB connection error`, err);
    process.exit( 1 ); 
    // exit the program
})
db.once('open', () => {
    console.log(`Success! DB connected, model loaded.`);
    // process.exit( 0 )
})

// clean any existing database before initilaising
await Project.deleteMany()

const projectExample = await Project.create({
    title: 'Example',
    description: 'lorem isp',
    screenshots: 'currently no image available',
    frontend: [{
        utilised: true,
        language: 'JS Vanilla',
        symbol: 'JS'
    }],
    backend: [{
        utilised: true,
        language: 'SQL',
        symbol: 'SQL'
    }]
}); 

console.log(projectExample);