import express from 'express'
import {
    createExam,
    getAllExams,
    getExamById,
    updateExam,
    deleteExam
} from '../controllers/examsController.js'

const router = express.Router();

// Route to create a new exam
router.post('/exams', createExam);

// Route to get all exams
router.get('/exams', getAllExams);

// Route to get a single exam by ID
router.get('/exams/:id', getExamById);

// Route to update an exam by ID
router.put('/exams/:id', updateExam);

// Route to delete an exam by ID
router.delete('/exams/:id', deleteExam);

export default router;