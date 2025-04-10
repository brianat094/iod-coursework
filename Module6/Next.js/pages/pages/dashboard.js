import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

export default function Dashboard({ isAuthenticated }) {
    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <div>
                <h1>Dashboard</h1>
                <p>Welcome to the Dashboard!</p>
            </div>
        </ProtectedRoute>
    );
}