import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={styles.navbar}>
            <Link href="/" style={styles.link}>
                Home
            </Link>
            <Link href="/login" style={styles.link}>
                Login
            </Link>
            <Link href="/bitcoin-rates" style={styles.link}>
                Bitcoin Rates
            </Link>
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
        color: 'orange',
        textDecoration: 'none',
        fontSize: '18px',
    },
};