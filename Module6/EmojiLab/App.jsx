import React from 'react';
import Emoji from './Emoji';
import './styles.css'; // Ensure this matches your styles file path

function App() {
    return (
        <div className="App">
            <h1>Emoji Mood Changer</h1>
            <Emoji />
        </div>
    );
}

export default App;