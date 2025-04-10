import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import BitcoinRates from './BitcoinRates';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/bitcoin-rates">Bitcoin Rates</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/bitcoin-rates" element={<BitcoinRates />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;