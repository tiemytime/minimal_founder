// Elegant Scroll Hint Interaction
document.addEventListener('DOMContentLoaded', function() {
    const scrollHint = document.getElementById('scrollHint');
    
    if (scrollHint) {
        scrollHint.addEventListener('click', function() {
            // Calculate scroll distance (70% of viewport height for elegant scroll)
            const scrollDistance = window.innerHeight * 0.7;
            
            // Smooth scroll down
            window.scrollTo({
                top: scrollDistance,
                behavior: 'smooth'
            });
        });
    }
});
