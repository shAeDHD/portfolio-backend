const mongoose = require('mongoose')
const Project = require('./Project')

mongoose.connect('mongodb://127.0.0.1')
const db = mongoose.connection;

db.on('error', err => {
    console.log(`DB connection error`, err);
    process.exit( 1 );  //  exit the program

})  //  close db.on(error) 

db.once('open', async () => {
    console.log(`Success! DB connected, model loaded.`);
    // clean any existing database before initilaising
    await Project.deleteMany()

    const projectExamples = await Project.create([
    
        {
            title: 'Example One',
            description: 'lorem isp',
            screenshots: 'currently no image available',
            hasFrontend: true,
            frontLanguage: 'JS Vanilla',
            frontSymbol: 'JS',
            hasBackend: true,
            backLanguage: 'SQL',
            backSymbol: 'SQL'
        },
        {
            title: 'Example Two',
            description: 'lorem isp',
            screenshots: 'currently no image available',
            hasFrontend: true,
            frontLanguage: 'React',
            frontSymbol: 'atomic energy',
            hasBackend: true,
            backLanguage: 'Ruby on Rails',
            backSymbol: 'tentacles?'
        },

    ]); 
    console.log(`created examples`, projectExamples);
    process.exit( 0 );  //  exit the program

})  //  close db.on(error) 