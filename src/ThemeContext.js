import React,{createContext, useState} from 'react';
export const ThemeContext = createContext();
export const ThemeProvider = ({Children}) => {
    const [darkMode, setDarkMode] =useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return(
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {Children}
        </ThemeContext.Provider>
    );
};