// Model for containing data relevant to projects that have been
//  worked on. 
const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({

    title: String,
    description: String,
    screenshots: String,
    hasFrontend: Boolean,
    frontLanguage: String,
    frontSymbol: String,
    hasBackend: Boolean,
    backLanguage: String,
    backSymbol: String

});          //  projectSchema

const model = mongoose.model('Project', projectSchema);

module.exports = model;