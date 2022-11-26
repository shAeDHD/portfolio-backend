import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const projectSchema = new Schema({

    title: String,
    description: String,
    frontend: [{
        utilised: Boolean,
        language: String,
        symbol: String
    }],     //  frontend details
    backend: [{
        utilised: Boolean,
        language: String,
        symbol: String
    }],     //  backend details

})          //  projectSchema