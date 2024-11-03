import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Create the context
export const StoreContext = createContext();

// Create the provider component
const StoreContextProvider = (props) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (!location.pathname.includes('login')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location])

    const value = {
        sidebarToggle,
        setSidebarToggle,
        navigate,
        visible,
        setVisible
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
