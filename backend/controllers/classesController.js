import classesModel from '../models/classesModel.js'

// Controller to add a new class
const addClass = async (req, res) => {
    try {
        const newClass = new classesModel(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to get all classes
const getAllClasses = async (req, res) => {
    try {
        const classes = await classesModel.find();
        res.status(200).json(classes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to get a single class by ID
const getClassById = async (req, res) => {
    try {
        const classData = await classesModel.findById(req.params.id);
        if (!classData) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json(classData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to update a class
const updateClass = async (req, res) => {
    try {
        const updatedClass = await classesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller to delete a class
const deleteClass = async (req, res) => {
    try {
        const deletedClass = await classesModel.findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export all controllers as an object
export  {
    addClass,
    getAllClasses,
    getClassById,
    updateClass,
    deleteClass
}
