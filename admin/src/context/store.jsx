import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

// Create the context
export const StoreContext = createContext();

// Create the provider component
const StoreContextProvider = (props) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const [exams, setExams] = useState([]);
    const [data, setData] = useState([]); // Start with an empty array
    const [editData, setEditData] = useState(null); // Store data for editing
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const view = searchParams.get("view");

    // Use the backend URL from environment variables
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    // Fetch exams when the component mounts
    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/exams`); // Use the backend URL
                setExams(response.data); // Set the fetched exams into state
            } catch (error) {
                console.error('Error fetching exams:', error);
            }
        };

        fetchExams();
    }, [backendUrl]); // Add backendUrl to dependencies

    const addExam = (newExam) => {
        setExams((prevExams) => [...prevExams, newExam]);
    };

    const onEditExam = (updatedExam) => {
        setExams((prevExams) =>
            prevExams.map((exam) => (exam._id === updatedExam._id ? updatedExam : exam))
        );
    };

    const onDeleteExam = (_id) => {
        setExams((prevExams) => prevExams.filter((exam) => exam._id !== _id));
    };

    useEffect(() => {
        if (!location.pathname.includes('login')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    // Fetch data from the database when the component mounts
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/classes`); // Use the backend URL
                setData(response.data);
            } catch (error) {
                console.error('Error fetching classes:', error);
            }
        };

        fetchClasses();
    }, [backendUrl]); // Add backendUrl to dependencies

    // Delete an item
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${backendUrl}/api/classes/${id}`); // Use the backend URL
            setData(data.filter((item) => item._id !== id)); // Update local state
        } catch (error) {
            console.error('Error deleting class:', error);
        }
    };

    // Edit an item
    const handleEdit = (item) => {
        setEditData(item);
        searchParams.set('view', 'addclass'); // Switch to "Add Class" view for editing
    };

    // Save new or updated item
    const handleSave = async (updatedItem) => {
        try {
            if (updatedItem._id) {
                // Update existing item
                const response = await axios.put(`${backendUrl}/api/classes/${updatedItem._id}`, updatedItem); // Use the backend URL
                setData(data.map((item) => (item._id === response.data._id ? response.data : item))); // Update local state
            } else {
                // Add new item
                const response = await axios.post(`${backendUrl}/api/classes/add`, updatedItem); // Use the backend URL
                setData([...data, response.data]); // Add new item to the state
            }
            setEditData(null); // Clear edit data after save
            searchParams.set('view', 'classlist'); // Switch back to "Class List" view
        } catch (error) {
            console.error('Error saving class:', error);
        }
    };

    const value = {
        sidebarToggle,
        setSidebarToggle,
        navigate,
        visible,
        setVisible,
        exams,
        setExams,
        addExam,
        onEditExam,
        onDeleteExam,
        data, setData,
        editData, setEditData,
        searchParams, handleDelete, handleEdit, handleSave, view
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
