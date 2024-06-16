// Fetch data from JSON file
function fetchData() {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check fetched data in console
            // Further logic to process and display recommendations
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to handle search operations
function search() {
    let userInput = document.getElementById('searchInput').value.toLowerCase();
    if (userInput.includes('beach')) {
        // Logic for beach recommendations
    } else if (userInput.includes('temple')) {
        // Logic for temple recommendations
    } else if (userInput.includes('country')) {
        // Logic for country recommendations
    } else {
        alert('Keyword not recognized.');
    }
}

// Function to clear results
function reset() {
    // Clear results logic
}

// Call fetchData function when the script is loaded
fetchData();
