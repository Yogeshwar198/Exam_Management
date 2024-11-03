import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { StoreContext } from '../context/store';

const NewExam = ({ addExam }) => {

  const { navigate } = useContext(StoreContext)

  const [formData, setFormData] = useState({
    title: '',
    type: '',
    startAt: '',
    endAt: '',
    duration: '',
    practicalExamDuration: '',
    examCode: '',
    examCenter: '',
    selectCategory: '',
    passingPercentage: '',
    rollNoPrefix: '',
    rollNoBase: '',
    paymentType: '',
    amount: '',
    totalMarks: '',
    resultPublishOn: '',
    DefaultTimeForQuestion: '',
    SelectSubjects: '',
  });


  const [toggles, setToggles] = useState({
    notifyStudent: false,
    questionTimeLimit: false,
    showResultOnCompletion: false,
    randomQuestionOrder: false,
    showSubjectOfQuestions: false,
    showCorrectAnswerImmediately: false,
    status: false,
  });
  const [value, setValue] = useState('');


  // Toggle Key
  const ToggleSwitch = ({ label, toggleKey }) => (
    <div className="flex flex-col space-y-1">
      <label className="text-gray-700 font-semibold">{label}</label>
      <div
        onClick={() =>
          setToggles((prevToggles) => ({
            ...prevToggles,
            [toggleKey]: !prevToggles[toggleKey],
          }))
        }
        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${toggles[toggleKey] ? 'bg-blue-500' : 'bg-gray-300'
          }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${toggles[toggleKey] ? 'translate-x-5' : 'translate-x-0'
            }`}
        ></div>
      </div>
    </div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExam = {
      ...formData,
      instructions: value,
      ...toggles,
    };

    try {
      const response = await axios.post('http://localhost:4000/api/exams', newExam, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Exam created successfully:', response.data);
      addExam(response.data.exam);

      // Reset form after submission
      setFormData({
        title: '',
        type: '',
        startAt: '',
        endAt: '',
        duration: '',
        practicalExamDuration: '',
        examCode: '',
        examCenter: '',
        selectCategory: '',
        passingPercentage: '',
        rollNoPrefix: '',
        rollNoBase: '',
        paymentType: '',
        amount: '',
        totalMarks: '',
        resultPublishOn: '',
        DefaultTimeForQuestion: '',
        SelectSubjects: '',
      });
      setToggles({
        notifyStudent: false,
        questionTimeLimit: false,
        showResultOnCompletion: false,
        randomQuestionOrder: false,
        showSubjectOfQuestions: false,
        showCorrectAnswerImmediately: false,
        status: false,
      });
      setValue('');
      navigate('/exams?view=examlist')
    } catch (error) {
      console.error('Error creating exam:', error);
    }
  };


  return (
    <div className="p-4 w-full">
      <form onSubmit={handleSubmit} className="w-full max-w-full bg-white space-y-6">

        {/* Row 1 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Title</label>
            <input type="text"
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Exam Title" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Exam Type</label>
            <select className="w-full p-2 border border-gray-300 rounded outline-stone-200"
              name='type'
              value={formData.type}
              onChange={handleInputChange}
              required>
              <option value="" disabled selected>Select Exam Type</option>
              <option value="midterm">Manual</option>
              <option value="final">Practical</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Start At</label>
            <input type="datetime-local" className="w-full p-2 border border-gray-300 rounded outline-stone-200"
              name='startAt'
              value={formData.startAt}
              onChange={handleInputChange}
              required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">End At</label>
            <input type="datetime-local" className="w-full p-2 border border-gray-300 rounded outline-stone-200"
              required
              name='endAt'
              value={formData.endAt}
              onChange={handleInputChange}
            />
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Duration (minutes)</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Duration" required
              name='duration'
              value={formData.duration}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Practical Exam Duration</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="Practical Time (optional)"
              name='practicalExamDuration'
              value={formData.practicalExamDuration}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Exam Code</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Exam Code" required
              name='examCode'
              value={formData.examCode}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Exam Center</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Exam Center (optional)"
              name='examCenter'
              value={formData.examCenter}
              onChange={handleInputChange}
            />
          </div>

        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Select Category</label>
            <select className="w-full p-2 border border-gray-300 rounded outline-stone-200" required
              name='selectCategory'
              value={formData.selectCategory}
              onChange={handleInputChange}
            >
              <option value="" disabled selected >Select Category</option>
              <option value="upsc">UPSC</option>
              <option value="patwari">Patwari</option>
              <option value="iit">IIT</option>
              <option value="iim">IIM</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Passing Percentage</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Passing % (optional)"
              name='passingPercentage'
              value={formData.passingPercentage}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Roll No Prefix</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Roll No Prefix (optional)"
              name='rollNoPrefix'
              value={formData.rollNoPrefix}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Roll No Base</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Roll No Base (optional)"
              name='rollNoBase'
              value={formData.rollNoBase}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Payment Type</label>
            <select className="w-full p-2 border border-gray-300 rounded outline-stone-200" required
              name='paymentType'
              value={formData.paymentType}
              onChange={handleInputChange}
            >
              <option value="" disabled selected>Select Payment Type</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Amount</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Amount" required
              name='amount'
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Total Marks</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Total Marks" required
              name='totalMarks'
              value={formData.totalMarks}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Result Publish On</label>
            <input type="date" className="w-full p-2 border border-gray-300 rounded outline-stone-200" required
              name='resultPublishOn'
              value={formData.resultPublishOn}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <ToggleSwitch label="Notify Student" toggleKey="notifyStudent" />
          <ToggleSwitch label="Question Time Limit Fixed" toggleKey="questionTimeLimit" />

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Default Time for Questions (seconds)</label>
            <input type="number" className="w-full p-2 border border-gray-300 rounded outline-stone-200" placeholder="Ex: 30 (optional)"
              name='DefaultTimeForQuestion'
              value={formData.DefaultTimeForQuestion}
              onChange={handleInputChange}
            />
          </div>

          <ToggleSwitch label="Show Result on Completion" toggleKey="showResultOnCompletion" />

        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <ToggleSwitch label="Random Question Order" toggleKey="randomQuestionOrder" />
          <ToggleSwitch label="Show Subject of Questions" toggleKey="showSubjectOfQuestions" />
          <ToggleSwitch label="Show Correct Answer Immediately" toggleKey="showCorrectAnswerImmediately" />
          <ToggleSwitch label="Status" toggleKey="status" />
        </div>

        {/* Row 7 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Select Subjects (optional)</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded outline-stone-200"
              name='SelectSubjects'
              value={formData.SelectSubjects}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Row 8 */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <div className="col-span-4">
            <label className="block text-gray-700 font-semibold mb-1">Instructions</label>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        </div>


        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default NewExam;
