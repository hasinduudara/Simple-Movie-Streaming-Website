// Add any JavaScript functionality if needed

// Example: Add a click event to movie cards to show an alert with the movie title
document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
        const movieTitle = card.querySelector('.card-title').textContent;
        
    });
});

// Add a click event to watch buttons to play the movie
document.querySelectorAll('.watch-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the card click event
        const movieTitle = button.getAttribute('data-movie');
        
        // Add logic to play the movie
    });
});

// Add a click event to download buttons to download the movie
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the card click event
        const movieTitle = button.getAttribute('data-movie');
        
        // Add logic to download the movie
    });
});