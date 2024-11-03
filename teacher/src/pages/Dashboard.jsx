import React from 'react'
import { FaUserFriends, FaUserGraduate, FaUsers, FaUserTag } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <main className="p-2">
      <div className="mb-8">
        <h3 className="text-2xl font-bold">DASHBOARD</h3>
      </div>

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Card 1 */}
        <div className="card bg-white p-4 rounded-lg shadow flex items-center">
          <FaUserGraduate className="text-5xl text-gray-600 flex-shrink-0" />
          <div className="ml-4 flex-grow">
            <h1 className="text-sm font-bold">Total Upcoming Exams</h1>
            <h3 className="text-md font-medium mt-1">1</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-white p-4 rounded-lg shadow flex items-center">
          <FaUserFriends className="text-5xl text-gray-600 flex-shrink-0" />
          <div className="ml-4 flex-grow">
            <h1 className="text-sm font-bold">On Going Exams</h1>
            <h3 className="text-md font-medium mt-1">0</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-white p-4 rounded-lg shadow flex items-center">
          <FaUserTag className="text-5xl text-gray-600 flex-shrink-0" />
          <div className="ml-4 flex-grow">
            <h1 className="text-sm font-bold">Total Recent Exams</h1>
            <h3 className="text-md font-medium mt-1">0</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-white p-4 rounded-lg shadow flex items-center">
          <FaUsers className="text-5xl text-gray-600 flex-shrink-0" />
          <div className="ml-4 flex-grow">
            <h1 className="text-sm font-bold">Total Transactions</h1>
            <h3 className="text-md font-medium mt-1">1</h3>
          </div>
        </div>
      </div>

      {/* Upcoming Exams Table */}
      <div className="w-full bg-white rounded-lg shadow-md p-4">
        <h1 className="text-lg font-semibold mb-4 flex items-center text-center md:text-left">
          Upcoming Exams
        </h1>
        <div className="flex justify-around gap-6 font-semibold border-b pb-2 overflow-auto">
          <p>#</p>
          <p>Exam Code</p>
          <p>Title</p>
          <p>Type</p>
          <p>Duration</p>
          <p>Marks</p>
          <p>Registration Date</p>
        </div>
        <div className="flex justify-end mt-2">
          <button className="bg-green-800 hover:bg-green-900 px-4 py-2 text-white">View All Exams</button>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
