import React, { createContext, useState } from 'react';

// Mood Context
export const MoodContext = createContext();

// Theme Context
export const ThemeContext = createContext();

// Context Provider Component
export const AppProvider = ({ children }) => {
    const [mood, setMood] = useState('😊'); // Default mood
    const [theme, setTheme] = useState('light'); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <MoodContext.Provider value={{ mood, setMood }}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </MoodContext.Provider>
    );
};