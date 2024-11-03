import React, { useContext, useEffect, useState } from 'react';
import {
    FaCog, FaKey, FaMedal, FaMoneyCheckAlt, FaRegFileAlt, FaUserCircle,
    FaUserGraduate, FaUserShield
} from 'react-icons/fa';
import { MdDashboard, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { StoreContext } from '../context/store';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { sidebarToggle, navigate, setSidebarToggle } = useContext(StoreContext);
    const [examsDropdownOpen, setExamsDropdownOpen] = useState(false); // State for managing dropdown visibility
    const [selectedExam, setSelectedExam] = useState(null); // State for managing selected exam filter

    // Hook to close sidebar on screens below 'sm' breakpoint after navigating
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
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

    // Toggle exams dropdown
    const toggleExamsDropdown = () => {
        setExamsDropdownOpen((prev) => !prev);
    };

    // Handle radio button toggle with `onClick`
    const handleRadioClick = (examType) => {
        setSelectedExam((prevSelectedExam) =>
            prevSelectedExam === examType ? null : examType
        );
    };

    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2 overflow-y-auto`} >
            <div className='flex gap-2 my-2 mb-4'>
                <FaUserShield className='w-8 h-8 text-black bg-white rounded-full p-1 cursor-pointer' />
                <h1 className='text-lg text-white font-bold'>Exam Panel</h1>
            </div>
            <hr />
            <div onClick={() => navigate('/profile')} className='text-white flex gap-2 items-center p-4 cursor-pointer'>
                <FaUserCircle className='w-6 h-6 mt-1' />
                <p>Sherwood001</p>
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
                    <NavLink to='/examregistrations' className='px-3 '>
                        <FaUserGraduate className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Exam Registrations
                    </NavLink>
                </li>

                {/* Exams Dropdown */}
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <div
                        onClick={toggleExamsDropdown}
                        className='px-3 cursor-pointer flex items-center justify-between'
                    >
                        <div className='flex items-center'>
                            <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2' />
                            <span>Exams</span>
                        </div>
                        <span>{examsDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                    </div>

                    {/* Dropdown Content */}
                    {examsDropdownOpen && (
                        <ul className='ml-8 mt-2 space-y-1'>
                            <li className='flex items-center'>
                                <input
                                    type='radio'
                                    id='upcoming'
                                    name='examFilter'
                                    className='mr-2'
                                    checked={selectedExam === 'upcoming'}
                                    onClick={() => handleRadioClick('upcoming')}
                                />
                                <label htmlFor='upcoming'>Upcoming Exams</label>
                            </li>
                            <li className='flex items-center'>
                                <input
                                    type='radio'
                                    id='ongoing'
                                    name='examFilter'
                                    className='mr-2'
                                    checked={selectedExam === 'ongoing'}
                                    onClick={() => handleRadioClick('ongoing')}
                                />
                                <label htmlFor='ongoing'>Ongoing Exams</label>
                            </li>
                            <li className='flex items-center'>
                                <input
                                    type='radio'
                                    id='recent'
                                    name='examFilter'
                                    className='mr-2'
                                    checked={selectedExam === 'recent'}
                                    onClick={() => handleRadioClick('recent')}
                                />
                                <label htmlFor='recent'>Recent Exams</label>
                            </li>
                            <li className='flex items-center'>
                                <input
                                    type='radio'
                                    id='practical'
                                    name='examFilter'
                                    className='mr-2'
                                    checked={selectedExam === 'practical'}
                                    onClick={() => handleRadioClick('practical')}
                                />
                                <label htmlFor='practical'>Practical Exams</label>
                            </li>
                        </ul>
                    )}
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/results' className='px-3 '>
                        <FaMedal className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Results
                    </NavLink>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/transactions' className='px-3 '>
                        <FaMoneyCheckAlt className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Transactions
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
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
