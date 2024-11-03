import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdFormatListBulleted } from 'react-icons/md';
import AddClass from '../components/AddClass';
import ClassList from '../components/ClassList';
import { StoreContext } from '../context/store';


const Classes = () => {

  const { data,  editData, handleDelete, handleEdit, handleSave, view } = useContext(StoreContext)


  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold">Classes</h3>
      </div>

      <div className="card bg-white p-2 rounded-lg shadow">
        <div className="flex space-x-4 mb-4 border-b-2 border-gray-200">
          <Link
            to="?view=classlist"
            className={`px-4 py-2 text-base transition-colors ${view === 'classlist' || view === null ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            <MdFormatListBulleted className="inline-block w-5 h-5 mr-1 -mt-1" />
            Standards List
          </Link>
          <Link
            to="?view=addclass"
            className={`px-4 py-2 text-base transition-colors ${view === 'addclass' ? 'border-b-2 border-blue-500 text-blue-500 font-semibold' : 'text-gray-500'}`}
          >
            <MdAdd className="inline-block w-5 h-5 mr-1 -mt-1" />
            Add Class
          </Link>
        </div>

        {/* Conditionally Render Content Based on `view` */}
        <div>
          {view === 'addclass' ? (
            <div>
              <h4 className="text-base p-2 bg-blue-500 rounded-t-md text-white">{editData ? 'Edit Class' : 'Add New Class'}</h4>
              <AddClass data={editData} onSave={handleSave} />
            </div>
          ) : (
            <ClassList data={data} onEdit={handleEdit} onDelete={handleDelete} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;
