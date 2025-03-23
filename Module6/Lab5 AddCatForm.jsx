import React, { useState } from 'react';

function AddCatForm({ addCat }) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addCat({ name, latinName, image });
        setName('');
        setLatinName('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-cat-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Latin Name"
                value={latinName}
                onChange={(e) => setLatinName(e.target.value)}
                required
            />
            <input
                type="url"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
            />
            <button type="submit">Add Cat</button>
        </form>
    );
}

export default AddCatForm;