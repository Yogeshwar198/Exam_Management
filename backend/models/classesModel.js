import mongoose from 'mongoose'


const classesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    sequence: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});


// Create the Class model
const classesModel = mongoose.model.classes || mongoose.model('classes', classesSchema);


export default classesModel;
