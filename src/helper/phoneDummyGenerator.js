
// Function to generate random dummy data
function generateDummyData(numItems) {
    const dummyData = [];
    let id = 1;

    for (let i = 0; i < numItems; i++) {
        const name = asd[i] //array of phone names
        const imgUrl = imageUrl[i] //array of phone img urls
        const isFavorite = Math.random() < 0.5; // Random boolean value
        const isRental = Math.random() < 0.5; // Random boolean value
        const deviceType = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
        const manufacturer = Math.floor(Math.random() * 21) + 1; // Random number between 1 and 21
        const operationArea = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        const price = Math.floor(Math.random() * 33 + 3) * 100; // Random number between 300 and 3500
        const weight = Math.floor(Math.random() * 13 + 1) * 100; // Random number between 100 and 1300

        dummyData.push({
            name: name,
            id: id++,
            imgUrl,
            isFavorite: isFavorite,
            isRental: isRental,
            deviceType: deviceType,
            manufacturer: manufacturer,
            operationArea: operationArea,
            price: price,
            weight: weight
        });
    }

    return dummyData;
}

// Generate 30 items of dummy data
const numItems = 89;
const dummyData = generateDummyData(numItems);
// end of Function to generate random dummy data 





//crawl image urls with some url pattern
// Select all elements with the class 'cs-standard-img-1-1'
const elements = document.querySelectorAll('.cs-standard-img-1-1');

// Initialize an empty array to store the URLs
const urls = [];

// Iterate over each element and extract the URLs based on the pattern
elements.forEach(element => {
    // Get the background-image URL from the element's style property
    const backgroundImageUrl = element.style.backgroundImage;

    // Extract the URL based on the pattern
    const url = backgroundImageUrl ? backgroundImageUrl.replace(/^url\(['"]?(.*?)['"]?\)$/, '$1') : null;

    // Check if the URL matches the expected pattern
    if (url && url.startsWith('https://skystatic08.atmos.id')) {
        urls.push(url);
    } else {
        console.log("Invalid URL found for element:", element);
    }
});

// Output the array of URLs
console.log(urls);





//crawl phone name, removed unrelated elements on start & end of array manually
const deviceNameElements = document.querySelectorAll('.cs-body-2>font>font');

// Extract device names
const deviceNames = Array.from(deviceNameElements).map(element => element.textContent.trim());

// Output device names
console.log(deviceNames);


// thanks chatgpt