import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Setting from './pages/Setting';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { StoreContext } from './context/store';
import Exams from './pages/Exams';
import ExamResult from './pages/Results';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import ExamRegistration from './pages/ExamRegistration';



const App = () => {
  const { sidebarToggle,visible } = useContext(StoreContext)


  return (
    <>
    
      <div className='flex'>
        <div className={`w-full ${visible ? (sidebarToggle ? '' : 'ml-64') : ''}`}>
          <Navbar />
        </div>
        {visible && <Sidebar />} {/* Render Sidebar only if visible is true */}
      </div>

      <div className={`${sidebarToggle ? "" : "sm:ml-64"} p-4`}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/exams' element={<Exams />} />
        <Route path='/results' element={<ExamResult />} />
        <Route path='/examregistrations' element={<ExamRegistration />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
      </div>
    </>
  )
}

export default App