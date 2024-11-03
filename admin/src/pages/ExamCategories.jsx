import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MdAdd, MdFormatListBulleted } from 'react-icons/md';
import AddExamCategory from '../components/AddExamCategory';
import ExamCategoryList from '../components/ExamCategoryList';


const ExamCategories = () => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");


  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">Categories</h3>
      </div>

      <div className="card bg-white p-2 rounded-lg shadow">
        <div className="flex space-x-4 mb-4 border-b-2 border-gray-200">
          <Link
            to="?view=categorylist"
            className={`px-4 py-2 text-base transition-colors ${view === 'categorylist' || view === null ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            <MdFormatListBulleted className="inline-block w-5 h-5 mr-1 -mt-1" />
            Category List
          </Link>
          <Link
            to="?view=addcategory"
            className={`px-4 py-2 text-base transition-colors ${view === 'addcategory' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            <MdAdd className="inline-block w-5 h-5 mr-1 -mt-1" />
            Add Category
          </Link>
        </div>

        {/* Conditionally Render Content Based on `view` */}
        <div>
          {view === 'addcategory' ? (
            <div>
              <h4 className="text-base p-2 bg-blue-500 rounded-t-md text-white">Add New Exam Category</h4>
              <AddExamCategory />
            </div>
          ) : (
            <ExamCategoryList />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCategories;
