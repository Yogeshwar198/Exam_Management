import React, { useState } from 'react';

const ClassList = ({ data, onEdit, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-500">
          <tr>
            <th className="px-4 py-2 text-left text-white">#</th>
            <th className="px-4 py-2 text-left text-white">Name</th>
            <th className="px-4 py-2 text-left text-white">Sequence</th>
            <th className="px-4 py-2 text-left text-white">Created At</th>
            <th className="px-4 py-2 text-left text-white">Updated At</th>
            <th className="px-4 py-2 text-left text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{(currentPage - 1) * rowsPerPage + index + 1}</td>
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.sequence}</td>
              <td className="px-4 py-2 border-b">{new Date(item.createdAt).toLocaleString()}</td>
              <td className="px-4 py-2 border-b">{new Date(item.updatedAt).toLocaleString()}</td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 mr-2"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => onDelete(item._id)} // Use _id for delete
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:underline'}`}
        >
          Previous
        </button>
        
        <div className="text-gray-700">
          Page {currentPage} of {totalPages}
        </div>
        
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500 hover:underline'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClassList;
