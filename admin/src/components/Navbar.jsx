import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { StoreContext } from '../context/store'
import { MdPowerSettingsNew } from 'react-icons/md';

const Navbar = () => {
    const { sidebarToggle, setSidebarToggle, navigate } = useContext(StoreContext)
    return (
        <nav className='w-full bg-gray-800 px-4 py-3 flex justify-between'>
            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)} />
            </div>

            <div className='flex items-center gap-x-2 py-1 text-white cursor-pointer'>
                <MdPowerSettingsNew className='w-6 h-6 mt-1 text-white' />
                <p onClick={() => navigate('/login')}>Logout</p>

            </div>
        </nav>
    )
}

export default Navbar