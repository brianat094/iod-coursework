import React from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ isAuthenticated, children }) {
    const router = useRouter();

    if (!isAuthenticated) {
        // Redirect to the login page if the user is not authenticated
        router.push('/login');
        return null;
    }

    return children;
}