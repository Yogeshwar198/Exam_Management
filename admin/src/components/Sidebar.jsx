import React, { useContext, useEffect } from 'react'
import { FaBook, FaChalkboardTeacher, FaCog, FaKey, FaMedal, FaMoneyCheckAlt, FaRegFileAlt, FaUserCircle, FaUserGraduate, FaUserShield } from 'react-icons/fa'
import { StoreContext } from '../context/store'
import { NavLink } from 'react-router-dom'
import { MdCategory, MdCheckCircle, MdClass, MdDashboard } from 'react-icons/md';


const Sidebar = () => {
    const { sidebarToggle, navigate, setSidebarToggle } = useContext(StoreContext)

     // Hook to close sidebar on screens below 'sm' breakpoint after navigating
     useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint is 640px
                setSidebarToggle(true); // Close sidebar on smaller screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Run once on mount in case screen is initially small

        return () => window.removeEventListener('resize', handleResize);
    }, [setSidebarToggle]);

    const handleNavLinkClick = () => {
        if (window.innerWidth < 640) {
            setSidebarToggle(true); // Close sidebar when a link is clicked on smaller screens
        }
    };

    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2 overflow-y-auto`} >
            <div className='flex gap-2 my-2 mb-4'>
                <FaUserShield className='w-8 h-8 text-black bg-white rounded-full p-1 cursor-pointer' />
                <h1 className='text-lg text-white font-bold'>Exam Management</h1>
            </div>
            <hr />
            <div onClick={() => navigate('/profile')} className='text-white flex gap-2 items-center p-4 cursor-pointer'>
                <FaUserCircle className='w-6 h-6 mt-1' />
                <p>Jone Deo</p>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold' onClick={handleNavLinkClick}>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/' className='px-3'>
                        <MdDashboard className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Dashboard
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/exams' className='px-3 '>
                        <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt>
                        Exams
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/examsubmissions' className='px-3 '>
                        <MdCheckCircle className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Exam Submissions
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/examresult' className='px-3 '>
                        <FaMedal className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Exam Result
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/examcategories' className='px-3 '>
                        <MdCategory className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Exam Categories
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/classes' className='px-3 '>
                        <MdClass className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Classes
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/subjects' className='px-3 '>
                        <FaBook className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Subjects
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/students' className='px-3 '>
                        <FaUserGraduate className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Students
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/teachers' className='px-3 '>
                        <FaChalkboardTeacher className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Teachers
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/payments' className='px-3 '>
                        <FaMoneyCheckAlt className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Payments
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/changepassword' className='px-3 '>
                        <FaKey className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Change Password
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/setting' className='px-3 '>
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div >
    )
}

export default Sidebar