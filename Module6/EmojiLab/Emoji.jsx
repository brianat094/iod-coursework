import React, { useContext } from 'react';
import { MoodContext } from './contexts';

function Emoji() {
    const { mood, setMood } = useContext(MoodContext);

    const emojis = ['😊', '😂', '😢', '😡', '😍', '😎', '😴', '🤔', '😱', '🤩'];

    const changeMood = () => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        setMood(emojis[randomIndex]);
    };

    return (
        <div className="emoji-container">
            <h1>{mood}</h1>
            <button onClick={changeMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;