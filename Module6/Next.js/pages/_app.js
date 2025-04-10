import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    };

    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} handleAuth={handleAuth} />
            <Component {...pageProps} isAuthenticated={isAuthenticated} />
        </div>
    );
}