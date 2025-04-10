import React from 'react';
import Link from 'next/link';

export default function Navbar({ isAuthenticated, handleAuth }) {
    return (
        <nav style={styles.navbar}>
            <Link href="/" style={styles.link}>
                Home
            </Link>
            <Link href="/dashboard" style={styles.link}>
                Dashboard
            </Link>
            <Link href="/posts" style={styles.link}>
                Posts
            </Link>
            <Link href="/about" style={styles.link}>
                About
            </Link>
            <button onClick={handleAuth} style={styles.button}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#007bff',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
    button: {
        backgroundColor: 'white',
        color: '#007bff',
        border: 'none',
        padding: '10px 15px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};