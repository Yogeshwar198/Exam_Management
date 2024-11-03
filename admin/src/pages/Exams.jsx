import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdFormatListBulleted } from 'react-icons/md';
import NewExam from '../components/NewExam';
import ExamsList from '../components/ExamsList';
import { StoreContext } from '../context/store';

const Exams = () => {

  const { exams, addExam, onEditExam, onDeleteExam, view } = useContext(StoreContext)


  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">Manage Exams</h3>
      </div>

      <div className="card bg-white p-2 rounded-lg shadow">
        <div className="flex space-x-4 mb-4 border-b-2 border-gray-200">
          <Link
            to="?view=examlist"
            className={`px-4 py-2 text-base transition-colors ${view === 'examlist' || view === null ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            <MdFormatListBulleted className="inline-block w-5 h-5 mr-1 -mt-1" />
            Exam List
          </Link>
          <Link
            to="?view=addexam"
            className={`px-4 py-2 text-base transition-colors ${view === 'addexam' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            <MdAdd className="inline-block w-5 h-5 mr-1 -mt-1" />
            Add Exam
          </Link>
        </div>

        <div>
          {view === 'addexam' ? (
            <div>
              <h4 className="text-base p-2 bg-blue-500 rounded-t-md text-white">Add New Exam</h4>
              <NewExam addExam={addExam} />
            </div>
          ) : (
            <div>
              <ExamsList exams={exams} onEditExam={onEditExam} onDeleteExam={onDeleteExam} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exams;
