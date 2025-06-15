// Ensure the script runs only after the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {
  // Select the form element using its ID.
  const form = document.getElementById('registration-form');
  // Select the div element where validation feedback will be displayed.
  const feedbackDiv = document.getElementById('form-feedback');

  // Add an event listener for the 'submit' event on the form.
  form.addEventListener('submit', (event) => {
      // Prevent the default form submission behavior, which would reload the page.
      event.preventDefault();

      // Retrieve the values from the input fields and remove any leading/trailing whitespace.
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Initialize a boolean to track the overall validation status.
      let isValid = true;
      // Initialize an array to store any validation error messages.
      const messages = [];

      // --- Username Validation ---
      // Check if the username length is less than 3 characters.
      if (username.length < 3) {
          isValid = false; // Set isValid to false as validation failed.
          messages.push('Username must be at least 3 characters long.'); // Add specific error message.
      }

      // --- Email Validation ---
      // Check if the email contains both '@' and '.' characters.
      // This is a basic check and can be made more robust with regex if needed.
      if (!email.includes('@') || !email.includes('.')) {
          isValid = false; // Set isValid to false as validation failed.
          messages.push('Please enter a valid email address.'); // Add specific error message.
      }

      // --- Password Validation ---
      // Check if the password length is less than 8 characters.
      if (password.length < 8) {
          isValid = false; // Set isValid to false as validation failed.
          messages.push('Password must be at least 8 characters long.'); // Add specific error message.
      }

      // --- Displaying Feedback ---
      // Make the feedback div visible.
      feedbackDiv.style.display = 'block';

      // If all validations passed (isValid is true).
      if (isValid) {
          // Display a success message.
          feedbackDiv.textContent = 'Registration successful!';
          // Set the text color to green for success.
          feedbackDiv.style.color = '#28a745';
          // Optionally, clear the form fields upon successful registration.
          form.reset();
      } else {
          // If validations failed (isValid is false).
          // Join all accumulated error messages with a <br> tag for new lines.
          feedbackDiv.innerHTML = messages.join('<br>');
          // Set the text color to red for errors.
          feedbackDiv.style.color = '#dc3545';
      }
  });
});
