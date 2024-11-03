import mongoose from 'mongoose';


const examsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    duration: { type: Number, required: true },
    practicalExamDuration: { type: Number },
    examCode: { type: String, required: true, unique: true },
    examCenter: { type: String },
    selectCategory: { type: String, required: true },
    passingPercentage: { type: Number },
    rollNoPrefix: { type: String },
    rollNoBase: { type: Number },
    paymentType: { type: String, required: true },
    amount: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    resultPublishOn: { type: Date, required: true },
    DefaultTimeForQuestion: { type: Number },
    SelectSubjects: { type: String },
    instructions: { type: String },
  
    // Toggles
    notifyStudent: { type: Boolean, default: false },
    questionTimeLimit: { type: Boolean, default: false },
    showResultOnCompletion: { type: Boolean, default: false },
    randomQuestionOrder: { type: Boolean, default: false },
    showSubjectOfQuestions: { type: Boolean, default: false },
    showCorrectAnswerImmediately: { type: Boolean, default: false },
    status: { type: Boolean, default: false },
  }, {
    timestamps: true 
  });

  // Create model from schema
const examsModel = mongoose.models.exams || mongoose.model('exams', examsSchema);

export default examsModel;