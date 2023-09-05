// Get references to the textarea, character count, and custom popup elements
let textarea = document.getElementById('myTextarea');
let charCount = document.getElementById('charCount');
let charRemaining = document.getElementById('charRemaining');
let customPopup = document.getElementById('customPopup');
let closePopupButton = document.getElementById('closePopup');

// Set the maximum character limit
let maxCharacters = 149; // Change this to your desired character limit

// Add an event listener to the textarea
textarea.addEventListener('input', function () {
  // Get the current text and its length
  let text = textarea.value;
  let textLength = text.length;
//   console
  console.log(textLength);

  // Update the character count element with the total characters
  charCount.textContent = 'Total characters: ' + textLength;

  // Calculate the remaining characters
  let remainingCharacters = maxCharacters - textLength;

  // Update the character remaining element
  charRemaining.textContent = 'Characters remaining: ' + remainingCharacters;

  // Check if the character limit is exceeded
  if (textLength > maxCharacters) {
    // Truncate the text to the maximum character limit
    textarea.value = text.slice(0, maxCharacters);
    textLength = maxCharacters; // Update the character count
    charRemaining.textContent = 'Characters remaining: 0'; // Update remaining characters to 0

    // Display the custom styled popup when the character limit is reached
    customPopup.style.display = 'block';
  }
});

// Add an event listener to the close button of the custom popup
closePopupButton.addEventListener('click', function () {
  // Hide the custom styled popup when the close button is clicked
  customPopup.style.display = 'none';
});
