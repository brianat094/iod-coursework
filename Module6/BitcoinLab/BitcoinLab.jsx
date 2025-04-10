import React, { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
            );
            const data = await response.json();
            setPrice(data.bitcoin[currency.toLowerCase()]);
        };

        fetchPrice();
    }, [currency]);

    return (
        <div className="bitcoin-rates">
            <h1>Bitcoin Exchange Rate</h1>
            <label>
                Choose currency:
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map((curr) => (
                        <option key={curr} value={curr}>
                            {curr}
                        </option>
                    ))}
                </select>
            </label>
            <div>
                {price ? (
                    <p>
                        1 Bitcoin = {price} {currency}
                    </p>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default BitcoinRates;