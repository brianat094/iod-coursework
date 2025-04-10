import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const initialCats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://www.wallpaperflare.com/static/523/955/625/clorseup-cheetah-cub-green-grass-wallpaper.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://th.bing.com/th/id/R.3a5f1d5f9f5e4fffb794d82d0c968e01?rik=1yy3VvdyOmvg9Q&pid=ImgRaw&r=0' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://th.bing.com/th/id/OIP.jYRXOyseXdhy_xqPZ299pQHaEK?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://www.animalfactsencyclopedia.com/images/xbaby-leopard.jpg.pagespeed.ic.LJw8fXYY30.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://th.bing.com/th/id/OIP.NCqsqOlD9vomyOzHz-O81AHaE8?rs=1&pid=ImgDetMain' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://th.bing.com/th/id/R.9ecb6c964bcafe9e20cc5a09b676ebc7?rik=72%2fx4e0BEqNtig&riu=http%3a%2f%2fmedia1.popsugar-assets.com%2ffiles%2fthumbor%2fYmg-BE0KTvR6c6N7qgwBHGY48WE%3d%2ffit-in%2f2048xorig%2fupl1%2f10%2f104166%2f34_2008%2f82462485_10%2fi%2fBaby-Snow-Leopard-Emba-Born-Germany-Rostock-Zoo.jpg&ehk=YAy8zIkGWN9a4Hz76Rxza5g4sRkHV6bPwCn4ZL4iBE8%3d&risl=&pid=ImgRaw&r=0' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://th.bing.com/th/id/R.286af29e453d41b5c7d2e36ce42bcb05?rik=4CT7rYLy2tkvpA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fb%2fc%2f1156684-cute-baby-tiger-wallpaper-2560x1600-for-android-tablet.jpg&ehk=1RpKlmhDqUetEhqu1wfSTwT6S9k4lRmXOZvy5ge5YDE%3d&risl=&pid=ImgRaw&r=0' },
];

function BigCats() {
    const [cats, setCats] = useState(initialCats);

    const sortAlphabetically = () => {
        const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
        setCats(sortedCats);
    };

    const reverseList = () => {
        const reversedCats = [...cats].reverse();
        setCats(reversedCats);
    };

    const filterPanthera = () => {
        const filteredCats = initialCats.filter(cat => cat.latinName.startsWith('Panthera'));
        setCats(filteredCats);
    };

    const resetList = () => {
        setCats(initialCats);
    };

    const addCat = (newCat) => {
        const newCatWithId = { ...newCat, id: cats.length + 1 };
        setCats([...cats, newCatWithId]);
    };

    const deleteCat = (id) => {
        const updatedCats = cats.filter(cat => cat.id !== id);
        setCats(updatedCats);
    };

    return (
        <div className="big-cats-container">
            <AddCatForm addCat={addCat} />
            <div className="buttons">
                <button onClick={sortAlphabetically}>Sort Alphabetically</button>
                <button onClick={reverseList}>Reverse List</button>
                <button onClick={filterPanthera}>Filter Panthera</button>
                <button onClick={resetList}>Reset List</button>
            </div>
            <div className="big-cats">
                {cats.map(cat => (
                    <SingleCat key={cat.id} cat={cat} deleteCat={deleteCat} />
                ))}
            </div>
        </div>
    );
}

export default BigCats;