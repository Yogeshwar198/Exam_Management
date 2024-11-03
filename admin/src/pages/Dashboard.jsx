import React from 'react'
import { FaChalkboardTeacher, FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdDescription, MdSchool } from 'react-icons/md';

const Dashboard = () => {
  return (
    <main className="p-2">
      <div className="mb-8">
        <h3 className="text-2xl font-bold">DASHBOARD</h3>
      </div>

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">3000.00 ₹</h3>
            <FaRegMoneyBillAlt className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-lg font-bold mt-4">Total Earning</h1>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">4</h3>
            <MdDescription className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-lg font-bold mt-4">Total Exams</h1>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">5</h3>
            <MdSchool className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-lg font-bold mt-4">Total Students</h1>
        </div>
        <div className="card bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">1</h3>
            <FaChalkboardTeacher className="text-3xl text-gray-600" />
          </div>
          <h1 className="text-lg font-bold mt-4">Total Teachers</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">

        {/* Left Table */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 bg-white rounded-lg shadow-md p-4">
          <h1 className="text-lg font-semibold mb-4 text-center md:text-left">Total's Exams</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-semibold border-b pb-2">
            <p>Exam Code</p>
            <p>Title</p>
            <p>Type</p>
            <p>Start At</p>
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-green-800 hover:bg-green-900 px-4 py-2 text-white">View All Exams</button>
          </div>
        </div>

        {/* Right Table */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4">
          <h1 className="text-lg font-semibold mb-4 text-center md:text-left">Upcoming Exams</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-semibold border-b pb-2">
            <p>Exam Code</p>
            <p>Title</p>
            <p>Type</p>
            <p>Start At</p>
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-green-800 hover:bg-green-900 px-4 py-2 text-white">View All Exams</button>
          </div>
        </div>
        
      </div>


    </main>
  )
}

export default Dashboard