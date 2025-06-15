// Ensure the script runs only after the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Asynchronously fetches user data from a public API and displays it
     * on the web page. Handles loading, data display, and error states.
     */
    async function fetchUserData() {
        // Define the URL for the public API to fetch user data.
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the HTML element where the API data will be displayed.
        const dataContainer = document.getElementById('api-data');

        // Initially display a loading message.
        dataContainer.textContent = 'Loading user data...';
        dataContainer.style.color = '#333'; // Reset color in case of previous error

        try {
            // Asynchronously fetch data from the specified API URL.
            const response = await fetch(apiUrl);

            // Check if the HTTP response was successful (status code 200-299).
            if (!response.ok) {
                // If not successful, throw an error to be caught by the catch block.
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response body as JSON.
            const users = await response.json();

            // Clear the existing content of the data container (e.g., "Loading user data...").
            dataContainer.innerHTML = '';

            // Create an unordered list element to hold the user names.
            const userList = document.createElement('ul');
            userList.classList.add('user-list'); // Add class for potential styling from CSS

            // Loop through each user in the fetched data.
            users.forEach(user => {
                // Create a list item for each user.
                const listItem = document.createElement('li');
                // Set the text content of the list item to the user's name.
                listItem.textContent = user.name;
                // Append the list item to the unordered list.
                userList.appendChild(listItem);
            });

            // Append the complete user list to the data container in the HTML.
            dataContainer.appendChild(userList);

        } catch (error) {
            // This block executes if any error occurs during the fetch operation
            // (e.g., network issues, invalid URL, failed response).

            // Clear any previous content or loading messages.
            dataContainer.innerHTML = '';
            // Set the text content to an error message.
            dataContainer.textContent = 'Failed to load user data.';
            // Set the text color to red to indicate an error.
            dataContainer.style.color = '#dc3545';
            // Log the full error to the console for debugging purposes.
            console.error('Error fetching user data:', error);
        }
    }

    // Add an event listener to the document to ensure the DOM is fully loaded
    // before attempting to fetch and display data.
    // Once DOMContentLoaded fires, the fetchUserData function will be called.
    fetchUserData();
});
