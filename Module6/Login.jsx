import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuthenticated(true);
        navigate('/'); // Redirect to Home page after login
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;