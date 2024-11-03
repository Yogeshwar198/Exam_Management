import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddClass = ({ data, onSave }) => {
    
    const [formData, setFormData] = useState({
        name: '',
        sequence: '',
        createdAt: '',
        updatedAt: ''
    });

    // Effect to populate form data when editing
    useEffect(() => {
        if (data) {
            setFormData(data);
        } else {
            setFormData({
                name: '',
                sequence: '',
                createdAt: '',
                updatedAt: ''
            });
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            let response;
            if (data) {
                // If data exists (meaning we're editing)
                response = await axios.put(`https://exam-management-self.vercel.app//api/classes/${data._id}`, formData);
            } else {
                // If no data exists (adding a new class)
                response = await axios.post('https://exam-management-self.vercel.app//api/classes/add', formData);
            }
    
            console.log('Class saved:', response.data);
            // Call the onSave function if provided
            if (onSave) onSave(response.data);
    
            // Reset form after saving
            setFormData({
                name: '',
                sequence: '',
                createdAt: '',
                updatedAt: ''
            });
    
        } catch (error) {
            console.error('Error saving class:', error);
            alert('Failed to add/update class: ' + error.response?.data?.error || error.message);
        }
    };
    

    return (
        <div className="flex justify-center items-center p-4 min-h-[100%]">
            <form onSubmit={handleSubmit} className="space-y-6 w-full px-4 md:px-8">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-600 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder='Name'
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-stone-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="sequence" className="block text-gray-600 font-medium mb-1">Sequence</label>
                        <input
                            type="number"
                            placeholder='Sequence'
                            id="sequence"
                            name="sequence"
                            value={formData.sequence}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-stone-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="createdAt" className="block text-gray-600 font-medium mb-1">Created At</label>
                        <input
                            type="datetime-local"
                            id="createdAt"
                            name="createdAt"
                            value={formData.createdAt}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-stone-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="updatedAt" className="block text-gray-600 font-medium mb-1">Updated At</label>
                        <input
                            type="datetime-local"
                            id="updatedAt"
                            name="updatedAt"
                            value={formData.updatedAt}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-stone-200"
                            required
                        />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        {data ? 'Update Class' : 'Add Class'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddClass;
