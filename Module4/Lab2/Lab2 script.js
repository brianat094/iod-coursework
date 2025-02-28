const artist = {
    name: "Jean Michael Basquiat",
    portfolio: [
        {
            title: "crown",
            url: "https://www.incredibleart.com/basquiat-crown-meaning/"
        },
        {
            title: "dinosaur crown",
            url: "https://www.jean-michel-basquiat.org/pez-dispenser/"
        }

    ]

};

function displayArtist(artist) {
    const artistContainer = document.getElementById('artist-container');
    const artistName = document.createElement('h2');
    artistName.textContent = artist.name;
    artistContainer.appendChild(artistName);

    artist.portfolio.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        portfolioItem.appendChild(itemTitle);

        const itemImage = document.createElement('img');
        itemImage.src = item.url;
        itemImage.alt = item.title;
        portfolioItem.appendChild(itemImage);

        artistContainer.appendChild(portfolioItem);
    });
}

displayArtist(artist);