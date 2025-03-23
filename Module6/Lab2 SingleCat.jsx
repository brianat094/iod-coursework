import React from 'react';

function SingleCat({ cat, deleteCat }) {
    return (
        <div className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <h2>{cat.name}</h2>
            <p><em>{cat.latinName}</em></p>
            <button onClick={() => deleteCat(cat.id)}>Delete</button>
        </div>
    );
}

export default SingleCat;