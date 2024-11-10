// JavaScript to handle the search functionality
document.getElementById('search-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
    
    let searchQuery = document.getElementById('search-input').value; // Get search input
    
    if (searchQuery) {
        // For demonstration, we just show an alert with the search term.
        // In a real application, you can integrate it with search results or API calls.
        alert("Searching for: " + searchQuery);
        
        // You can also redirect the user to a search results page like this:
        // window.location.href = "/search?query=" + searchQuery;
    } else {
        alert("Please enter a search term.");
    }
});


function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle the active class on the navigation list
    navList.classList.toggle('active');
    
    // Toggle the active class on the hamburger for animation
    hamburger.classList.toggle('active');
}



// Optional: You can add JS for dynamic behavior, e.g., newsletter form submission or toggling.
document.querySelector('.newsletter-signup form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for subscribing!");
});

// Add event listener to trigger smooth scroll on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

