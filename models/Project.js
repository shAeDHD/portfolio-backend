// Model for containing data relevant to projects that have been
//  worked on. 

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

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

const Project = model('Project', projectSchema);

export default Project;