import express from 'express'
import {
    addClass,
    getAllClasses,
    getClassById,
    updateClass,
    deleteClass
} from '../controllers/classesController.js'

const router = express.Router();

// Route to add a new class
router.post('/add', addClass);

// Route to get all classes
router.get('/', getAllClasses);

// Route to get a single class by ID
router.get('/:id', getClassById);

// Route to update a class by ID
router.put('/:id', updateClass);

// Route to delete a class by ID
router.delete('/:id', deleteClass);

export default router
