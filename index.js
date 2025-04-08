// // Add these variables at the top
// const occasions = [
//     "Birthday", "Anniversary", "Housewarming", "Retirement", "Graduation",
//     "New Job", "Promotion", "Farewell", "New Baby", "Baby Shower",
//     // ... Add all other occasions from the list
// ];

// const giftData = {
//     "Birthday": [
//         { name: "Smartwatch", image: "https://m.media-amazon.com/images/I/610OiiTm9PL.jpg" },
//         // ... Add all birthday gifts
//     ],
//     "Anniversary": [
//         { name: "Couple’s Personalized Name Necklace", image: "https://m.media-amazon.com/images/I/51+1q01Y8sL._AC_UY1100_.jpg" },
//         // ... Add all anniversary gifts
//     ],
//     // ... Add data for other occasions
// };

// // Search functionality
// const searchInput = document.getElementById('searchInput');
// const suggestions = document.getElementById('suggestions');
// const searchButton = document.getElementById('searchButton');

// function showSuggestions(results) {
//     suggestions.innerHTML = '';
//     results.forEach(occasion => {
//         const div = document.createElement('div');
//         div.className = 'suggestion-item';
//         div.textContent = occasion;
//         div.onclick = () => selectOccasion(occasion);
//         suggestions.appendChild(div);
//     });
//     suggestions.style.display = results.length ? 'block' : 'none';
// }

// function selectOccasion(occasion) {
//     searchInput.value = occasion;
//     suggestions.style.display = 'none';
//     localStorage.setItem('selectedOccasion', occasion);
//     window.location.href = `occasion.html?occasion=${encodeURIComponent(occasion)}`;
// }

// searchInput.addEventListener('input', function() {
//     const input = this.value.toLowerCase();
//     const results = occasions.filter(occasion => 
//         occasion.toLowerCase().includes(input)
//     );
//     showSuggestions(results);
// });

// searchButton.addEventListener('click', () => {
//     if (searchInput.value.trim()) {
//         selectOccasion(searchInput.value);
//     }
// });

// // Close suggestions when clicking outside
// document.addEventListener('click', (e) => {
//     if (!e.target.closest('.search-container')) {
//         suggestions.style.display = 'none';
//     }
// });





















// Assume you have an input element with id="searchInput"
// and a button with id="searchButton" in your HTML.

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// You might still want the suggestions logic from your original code.
// const suggestions = document.getElementById('suggestions');
// const allOccasionsForSuggestions = ["Birthday", "Anniversary", ...]; // For autocomplete

/**
 * Handles the redirection based on the selected or entered occasion name.
 * @param {string} occasionName - The name of the occasion entered by the user.
 */
function redirectToOccasionPage(occasionName) {
    // Normalize the input for reliable comparison (e.g., lowercase and trimmed)
    const normalizedOccasion = occasionName.trim().toLowerCase();

    let targetPage = null; // Variable to hold the target HTML file name

    // Use a switch statement or if-else if chain to determine the target page
    switch (normalizedOccasion) {
        case 'birthday':
            targetPage = 'browserBirthday.html';
            break;
        case 'anniversary':
            targetPage = 'browserAnniversary.html';
            break;
        case 'festival': // Assuming 'festival' is the input keyword
            targetPage = 'browserfestival.html';
            break;
        case 'personalized': // Assuming 'personalized' is the input keyword
        case 'personilized': // Allow for common misspelling?
            targetPage = 'browserPersonilized.html';
            break;
        case 'home': // Assuming 'home' is the input keyword (e.g., for housewarming?)
            targetPage = 'browserHome.html';
            break;
        // Add more cases here if needed for other specific occasions
        // case 'housewarming':
        //     targetPage = 'browserHome.html'; // Example: map housewarming to home
        //     break;
        default:
            // This handles the "other than these no exist" requirement
            targetPage = null; // Ensure it's null if no match
            console.log(`No specific page defined for occasion: ${occasionName}`);
            alert(`Asked on Chatbot "${occasionName}".`);
            break;
    }

    // If a target page was determined, redirect the browser
    if (targetPage) {
        console.log(`Redirecting to: ${targetPage}`); // Useful for debugging
        window.location.href = targetPage;
    } else {
        // Optional: Clear the input or give other feedback if no page exists
        // searchInput.value = '';
    }
}

// --- Event Listener for the Search Button ---
if (searchButton) {
    searchButton.addEventListener('click', () => {
        const occasionValue = searchInput.value;
        if (occasionValue.trim()) { // Check if the input is not just whitespace
            redirectToOccasionPage(occasionValue);
        } else {
            alert("Please enter an occasion."); // Optional feedback
        }
    });
} else {
    console.error("Search button not found!");
}


// --- Optional: Handle Enter key press in the search input ---
if (searchInput) {
    searchInput.addEventListener('keypress', (event) => {
        // Check if the key pressed was 'Enter'
        if (event.key === 'Enter' || event.keyCode === 13) { // keyCode is older but good fallback
            event.preventDefault(); // Prevent default form submission if it's in a form
            const occasionValue = searchInput.value;
            if (occasionValue.trim()) {
                redirectToOccasionPage(occasionValue);
            } else {
                alert("Please enter an occasion."); // Optional feedback
            }
        }
    });
} else {
     console.error("Search input not found!");
}


// --- Optional: Integrate with your suggestion logic ---
// If you use the suggestion dropdown from your original code,
// modify its selection function to call redirectToOccasionPage:

/*
// Example modification of your original selectOccasion function:
function selectOccasion(occasion) {
    searchInput.value = occasion;
    if (suggestions) { // Check if suggestions element exists
       suggestions.style.display = 'none';
    }
    // Instead of navigating to occasion.html?occasion=...
    // Call the new redirection function:
    redirectToOccasionPage(occasion);
}

// Your existing suggestion display logic (showSuggestions, event listeners)
// would remain largely the same, but the `onclick` handlers on suggestion
// items should call `selectOccasion(occasion)` (which now calls redirectToOccasionPage).
*/