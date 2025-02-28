/*The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. */

import fetch from 'node-fetch';
globalThis.fetch = fetch;

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

//a) Write a new version of this function using async/await

async function fetchURLDataAsync(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

//b) Test both functions with valid and invalid URLs

(async () => {
    try {
        const data = await fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const data = await fetchURLDataAsync('https://invalid-url');
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
})();


//c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
//using Promise.all to combine the results.
async function fetchMultipleURLs(urls) {
    try {
        const fetchPromises = urls.map(url => fetchURLDataAsync(url));
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        throw new Error(error.message);
    }
}
(async () => {
    const urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://invalid-url'
    ];

    try {
        const data = await fetchMultipleURLs(urls);
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
})();