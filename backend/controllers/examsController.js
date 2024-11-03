import examsModel from "../models/examsModel.js";


// Controller to handle creating a new exam
const createExam = async (req, res) => {
    try {
        const exam = new examsModel(req.body);
        await exam.save();
        res.status(201).json({ message: 'Exam created successfully', exam });
    } catch (error) {
        res.status(400).json({ message: 'Error creating exam', error });
    }
};

// Controller to get a list of all exams
const getAllExams = async (req, res) => {
    try {
        const exams = await examsModel.find();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exams', error });
    }
};

// Controller to get a single exam by ID
const getExamById = async (req, res) => {
    try {
        const exam = await examsModel.findById(req.params.id);
        if (!exam) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        res.status(200).json(exam);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exam', error });
    }
};

// Controller to update an exam by ID
const updateExam = async (req, res) => {
    try {
        const updatedExam = await examsModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedExam) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        res.status(200).json({ message: 'Exam updated successfully', updatedExam });
    } catch (error) {
        res.status(400).json({ message: 'Error updating exam', error });
    }
};

// Controller to delete an exam by ID
const deleteExam = async (req, res) => {
    try {
        const deletedExam = await examsModel.findByIdAndDelete(req.params.id);
        if (!deletedExam) {
            return res.status(404).json({ message: 'Exam not found' });
        }
        res.status(200).json({ message: 'Exam deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting exam', error });
    }
};

// Export all controller functions
export {
    createExam,
    getAllExams,
    getExamById,
    updateExam,
    deleteExam
}