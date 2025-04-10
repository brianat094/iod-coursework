import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

export default function About({ isAuthenticated }) {
    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <div>
                <h1>About</h1>
                <p>This is the About page.</p>
            </div>
        </ProtectedRoute>
    );
}