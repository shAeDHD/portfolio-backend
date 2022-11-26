const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1')

const db = mongoose.connection;

db.on('error', err => {
    console.log(`DB connection error`, err);
    process.exit( 1 ); // exit the program
})

db.once('open', () => {
    console.log(`Success! DB connected, model loaded.`);
    process.exit( 0 )
})
