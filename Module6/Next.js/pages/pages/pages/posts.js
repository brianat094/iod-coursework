import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

export default function Posts({ isAuthenticated }) {
    return (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <div>
                <h1>Posts</h1>
                <p>Here are your posts.</p>
            </div>
        </ProtectedRoute>
    );
}