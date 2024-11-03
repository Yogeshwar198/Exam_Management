import React, { useContext, useState } from 'react';
import axios from 'axios';
import { StoreContext } from '../context/store';

const ExamsList = ({ exams, onEditExam, onDeleteExam }) => {
  const { backendUrl } = useContext(StoreContext)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [editState, setEditState] = useState(null);

  const indexOfLastExam = currentPage * itemsPerPage;
  const indexOfFirstExam = indexOfLastExam - itemsPerPage;
  const currentExams = exams.slice(indexOfFirstExam, indexOfLastExam);

  const totalPages = Math.ceil(exams.length / itemsPerPage);

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  const handleEditClick = (exam) => {
    setEditState({ ...exam }); // Set the entire exam as the state so we have all fields
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`${backendUrl}/api/exams/${editState._id}`, editState);
      console.log('Exam updated:', response.data);

      // Update exams list in state after successful edit
      onEditExam(response.data);
      setEditState(null);  // Reset edit state after save
    } catch (error) {
      console.error('Error updating exam:', error);
      alert('Failed to update exam. Please try again.');
    }
  };

  const handleCancelEdit = () => {
    setEditState(null); // Cancel edit by resetting editState
  };

  const handleDeleteClick = async (id) => {
    console.log("Deleting exam ID:", id);  // Check the `id` value
    if (window.confirm("Are you sure you want to delete this exam?")) {
      try {
        const response = await axios.delete(`${backendUrl}/api/exams/${id}`);
        console.log(`Exam with ID ${id} deleted successfully`, response.data);
        onDeleteExam(id); // Update local state to remove the deleted exam
      } catch (error) {
        console.error('Error deleting exam:', error);
        alert('Failed to delete exam. Please try again.');
      }
    }
  };

  return (
    <div className='overflow-x-auto'>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Payment Type</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Start At</th>
            <th className="px-4 py-2">End At</th>
            <th className="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {currentExams.map((exam, index) => (
            <tr key={exam._id || index} className="text-center border-b hover:bg-gray-100">
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <>
                    <button onClick={handleSaveEdit} className="text-green-500 hover:underline mr-2">Save</button>
                    <button onClick={handleCancelEdit} className="text-red-500 hover:underline">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(exam)} className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button onClick={() => handleDeleteClick(exam._id)} className="text-red-500 hover:underline">Delete</button>
                  </>
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <input
                    type="text"
                    name="title"
                    value={editState.title}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  exam.title
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <input
                    type="text"
                    name="type"
                    value={editState.type}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  exam.type
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <input
                    type="text"
                    name="examCode"
                    value={editState.examCode}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  exam.examCode
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <input
                    type="text"
                    name="paymentType"
                    value={editState.paymentType}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  exam.paymentType
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <select
                    name="status"
                    value={editState.status}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                ) : (
                  (exam.status ? "Active" : "Inactive")
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <input
                    type="datetime-local"
                    name="startAt"
                    value={editState.startAt}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  new Date(exam.startAt).toLocaleString()
                )}
              </td>
              <td className="px-4 py-2">
                {editState && editState._id === exam._id ? (
                  <input
                    type="datetime-local"
                    name="endAt"
                    value={editState.endAt}
                    onChange={handleEditChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  new Date(exam.endAt).toLocaleString()
                )}
              </td>
              <td className="px-4 py-2">{new Date(exam.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:underline'}`}
        >
          Previous
        </button>

        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500 hover:underline'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExamsList;
