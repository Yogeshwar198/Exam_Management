import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Setting from './pages/Setting';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { StoreContext } from './context/store';
import Exams from './pages/Exams';
import ExamSubmissions from './pages/ExamSubmissions';
import ExamResult from './pages/ExamResult';
import ExamCategories from './pages/ExamCategories';
import Classes from './pages/Classes';
import Subjects from './pages/Subjects';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Payments from './pages/Payments';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';

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
        <Route path='/examsubmissions' element={<ExamSubmissions />} />
        <Route path='/examresult' element={<ExamResult />} />
        <Route path='/examcategories' element={<ExamCategories />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/subjects' element={<Subjects />} />
        <Route path='/students' element={<Students />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
      </div>
    </>
  )
}

export default App