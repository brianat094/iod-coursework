import React from 'react';
import { useRouter } from 'next/router';

export default function Login({ isAuthenticated, handleAuth }) {
    const router = useRouter();

    const handleLogin = () => {
        handleAuth();
        router.push('/'); // Redirect to Home page after login
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}